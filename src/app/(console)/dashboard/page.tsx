import { ProjectsTable } from "./ProjectsTable";
import { ProjectsTableToolbar } from "./ProjectsTableToolbar";

export async function generateMetadata() {
  return { title: "Projects" };
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <ProjectsTableToolbar />
      <ProjectsTable />
    </div>
  );
}
