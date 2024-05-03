// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";
// import { Icons } from "./icons";

// interface DeleteConfirmationDialogProps {
//   open: boolean;
//   title: string;
//   description: string;
//   loading?: boolean;
//   onDelete: () => void;
//   onCancel: () => void;
// }

// const DeleteConfirmationDialog = ({
//   open,
//   title,
//   description,
//   loading,
//   onDelete,
//   onCancel,
// }: DeleteConfirmationDialogProps) => {
//   return (
//     <AlertDialog open={open}>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>{title}</AlertDialogTitle>
//           <AlertDialogDescription>{description}</AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
//           <AlertDialogAction
//             className="bg-destructive px-6 text-primary hover:bg-destructive"
//             onClick={onDelete}
//             disabled={loading}
//           >
//             {loading && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
//             Yes
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

// export default DeleteConfirmationDialog;

import { useMutation } from "@apollo/client";
import { DocumentNode } from "graphql";
import React, { useImperativeHandle } from "react";
import { toast } from "sonner";
import { Icons } from "./icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

export interface DeleteConfirmationT {
  open: (id: number) => void;
}

interface DeleteConfirmationProps {
  // handleDelete: (id: string | number) => Promise<void>;
  gqlQuery: DocumentNode;
  refetchQuery: DocumentNode;
}

const DeleteConfirmationDialog = React.forwardRef<
  DeleteConfirmationT,
  DeleteConfirmationProps
>(({ gqlQuery, refetchQuery }, ref) => {
  const [id, setId] = React.useState<number>(0);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const [deleteMutation] = useMutation(gqlQuery);

  const onCancelPress = React.useCallback(() => {
    setId(0);
    setOpen(false);
  }, []);

  const onYes = React.useCallback(async () => {
    if (!id) {
      return;
    }

    setLoading(true);
    try {
      // Perform the delete mutation
      await deleteMutation({
        variables: {
          input: {
            id,
          },
        },
        refetchQueries: [{ query: refetchQuery }],
      });
      toast.success("Deleted successfully");
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Failed to delete");
    } finally {
      setLoading(false);
      setId(0);
      setOpen(false);
    }
  }, [deleteMutation, id, refetchQuery]);

  useImperativeHandle(
    ref,
    () => ({
      open: (id: number) => {
        setId(id);
        setOpen(true);
      },
    }),
    [],
  );

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure you want to delete this project?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {" "}
          <AlertDialogCancel onClick={onCancelPress}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive px-6 text-primary hover:bg-destructive"
            onClick={onYes}
            disabled={loading}
          >
            {loading && <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />}
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
});

DeleteConfirmationDialog.displayName = "DeleteConfirmationDialog";

export default DeleteConfirmationDialog;
