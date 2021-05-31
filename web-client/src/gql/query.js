import gql from "graphql-tag";

// Set cache using client query
export const typeDefs = gql`
  extend type query {
    isLoggedIn: Boolean!
  }
`;
export const IS_LOGGED_IN = gql`
  query IsLoggedIn {
    isLoggedIn @client
  }
`;

export const GET_ME = gql`
  query Me {
    me {
      id
      favorites {
        id
      }
    }
  }
`;

export const GET_MY_FAVORITES = gql`
  query Me {
    me {
      id
      username
      favorites {
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
  }
`;

export const GET_MY_NOTES = gql`
  query me {
    me {
      id
      username
      notes {
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
  }
`;

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
