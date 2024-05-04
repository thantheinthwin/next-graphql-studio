import { CreateProjectFormValues } from "@/types";
import { useMutation } from "@apollo/client";
import React, { useCallback } from "react";
import { toast } from "sonner";
import { CreateProjectForm } from "./_forms/CreateProjectForm";
import { CREATE_PROJECT } from "@/graphql/mutations";
import { GET_PROJECTS } from "@/graphql/queries";

interface CreateProjectProps {
  closeDialog: () => void;
}

export const CreateProject: React.FC<CreateProjectProps> = ({
  closeDialog,
}) => {
  const [createProjectMutation, { loading }] = useMutation(CREATE_PROJECT);

  const onSubmit = useCallback(
    async (formValues: CreateProjectFormValues) => {
      try {
        // Call the createProjectMutation with the formValues
        await createProjectMutation({
          variables: { input: formValues },
          refetchQueries: [{ query: GET_PROJECTS }],
        });
        toast.success("Project created successfully");
        closeDialog();
      } catch (error) {
        toast.error("Failed to create project");
      }
    },
    [closeDialog, createProjectMutation],
  );

  return <CreateProjectForm onSubmit={onSubmit} isLoading={loading} />;
};
