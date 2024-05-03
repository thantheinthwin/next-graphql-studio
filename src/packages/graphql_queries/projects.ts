import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
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

export const DELETE_PROJECT = gql`
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
      id
    }
  }
`;
