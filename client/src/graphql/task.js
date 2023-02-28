import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation Mutation($title: String, $projectId: ID) {
    createTask(title: $title, projectId: $projectId) {
      title
      project {
        _id
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation Mutation($id: ID!) {
    deleteTask(_id: $id) {
      title
      _id
    }
  }
`;
