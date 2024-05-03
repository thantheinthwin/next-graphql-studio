"use client";

import { DataTable } from "@/components/data-table";
// pages/index.tsx
import { ProjectsData, ProjectsListViewData } from "@/packages/types";
import { gql, useQuery } from "@apollo/client";
import { columns } from "./projectColumn";

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

export const ProjectsTable: React.FC = () => {
  const { loading, error, data } = useQuery<ProjectsData>(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const projects = data?.listProjects ? data?.listProjects.items : [];

  return (
    <DataTable
      data={projects.map(
        (p) =>
          ({
            id: p.id,
            name: p.name,
            description: p.description,
          }) as ProjectsListViewData,
      )}
      columns={columns}
    />
  );
};
