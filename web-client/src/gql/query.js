import gql from "graphql-tag";

export const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        content
        createdAt
        favoriteCount
        author {
          id
          username
          email
          avatar
        }
      }
    }
  }
`;

export const GET_NOTE = gql`
  query note($id: ID!) {
    note(id: $id) {
      id
      content
      createdAt
      favoriteCount
      author {
        id
        username
        avatar
      }
    }
  }
`;
// Set cache using client query
export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;
