import { ProjectsTable } from "./ProjectsTable";
import { ProjectsTableToolbar } from "./ProjectsTableToolbar";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ProjectsTableToolbar />
      <ProjectsTable />
    </div>
  );
}
