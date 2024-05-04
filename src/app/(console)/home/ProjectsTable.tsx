"use client";

import { DataTable } from "@/components/data-table";
import DeleteConfirmationDialog, {
  DeleteConfirmationT,
} from "@/components/delete-confirmation-dialog";
import {
  DELETE_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from "@/packages/graphql_queries";
import { ProjectsData, ProjectsListViewData } from "@/packages/types";
import { useMutation, useQuery } from "@apollo/client";
import { useMemo, useRef } from "react";
import { columns } from "./projectColumn";

export const ProjectsTable: React.FC = () => {
  const { loading, error, data } = useQuery<ProjectsData>(GET_PROJECTS);

  const deleteRef = useRef<DeleteConfirmationT>(null);

  const [updateMutation] = useMutation(UPDATE_PROJECT);

  const tableMeta = useMemo(() => {
    return {
      removeItem: (id: number) => deleteRef.current?.open(id),
      editItem: async (id: number, name: string) => {
        await updateMutation({
          variables: {
            input: {
              id,
              name,
            },
          },
          refetchQueries: [{ query: GET_PROJECTS }],
        });
      },
    };
  }, [updateMutation]);

  if (error) return <p>Error: {error.message}</p>;

  const projects = data?.listProjects ? data?.listProjects.items : [];

  return (
    <>
      <DataTable
        isLoading={loading}
        meta={tableMeta}
        columns={columns}
        data={projects.map(
          (p) =>
            ({
              id: p.id,
              name: p.name,
              description: p.description,
            }) as ProjectsListViewData,
        )}
        initialState={{
          columnVisibility: {
            id: false,
          },
        }}
      />
      <DeleteConfirmationDialog
        ref={deleteRef}
        gqlQuery={DELETE_PROJECT}
        refetchQuery={GET_PROJECTS}
      />
    </>
  );
};
