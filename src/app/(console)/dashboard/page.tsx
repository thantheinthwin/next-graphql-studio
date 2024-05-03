"use client";

// pages/index.tsx
import { gql, useQuery } from "@apollo/client";

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

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {data?.listProjects.items.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
