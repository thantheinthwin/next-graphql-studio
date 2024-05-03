"use client";

// pages/index.tsx
import { gql, useQuery } from "@apollo/client";
import { ProjectsTable } from "./ProjectsTable";

const GET_PROJECTS = gql`
  query ListProjects {
    listProjects {
      items {
        id
        name
        description
      }
    }
  }
`;

interface Project {
  id: string;
  name: string;
  description: string;
}

interface ProjectsData {
  listProjects: {
    items: Project[];
  };
}

export default function HomePage() {
  const { loading, error, data } = useQuery<ProjectsData>(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const projects = data?.listProjects ? data?.listProjects.items : [];

  return (
    <div className="p-8">
      <ProjectsTable />
    </div>
  );
}
