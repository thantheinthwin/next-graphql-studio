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
