import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import NoteFeed from "../components/NoteFeed";

const GET_NOTES = gql`
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

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  if (loading) return <p>Now loading....</p>;
  if (error) return <p>Error!</p>;
  return <NoteFeed notes={data.noteFeed.notes} />;
};

export default Home;
