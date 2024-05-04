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

export const ProjectsTableToolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Dialog>
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
          <div></div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
