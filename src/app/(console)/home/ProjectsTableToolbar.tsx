'use client';

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useCallback, useState } from "react";
import { CreateProject } from "./CreateProject";

export const ProjectsTableToolbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>
            <Icons.Plus className="mr-2 h-4 w-4" />
            Create Project
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Project</DialogTitle>
            <DialogDescription>
              Create a new project to get started.
            </DialogDescription>
          </DialogHeader>
          <CreateProject closeDialog={closeDialog} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
