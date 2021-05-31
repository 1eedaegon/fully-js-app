import gql from "graphql-tag";

export const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;
export const EDIT_NOTE = gql`
  mutation UpdateNote($id: ID!) {
    updateNote(id: $id) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        id
        username
      }
    }
  }
`;
export const NEW_NOTE = gql`
  mutation NewNote($content: String!) {
    newNote(content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

export const SIGNIN_USER = gql`
  mutation SignIn($username: String, $email: String!, $password: String!) {
    signIn(username: $username, email: $email, password: $password)
  }
`;
