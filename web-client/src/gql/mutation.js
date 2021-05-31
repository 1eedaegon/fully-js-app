import gql from "graphql-tag";

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
