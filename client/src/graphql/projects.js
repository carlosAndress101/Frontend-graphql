import { gql } from "@apollo/client";
export const GET_PROJECTS = gql`
  {
    projects {
      _id
      name
      description
      #createAt
      #updatedAt
    }
  }
`;

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(_id: $id) {
      _id
      name
      description
      createAt
      tasks {
        _id
        title
      }
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation Mutation($name: String, $description: String) {
    createProject(name: $name, description: $description) {
      _id
      description
      name
    }
  }
`;
