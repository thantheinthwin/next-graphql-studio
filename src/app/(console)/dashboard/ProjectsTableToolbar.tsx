import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const ProjectsTableToolbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      <Button>
        <Icons.Plus className="mr-2 h-4 w-4" />
        Create Project
      </Button>
    </div>
  );
};
