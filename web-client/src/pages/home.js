import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Button from "../components/button";

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
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  if (loading) return <p>Now loading....</p>;
  if (error) return <p>Error!</p>;
  return (
    <div className="home">
      <h2>This is Home page</h2>
      <Button>Click Please!</Button>
      {console.log(data)}
      <p>Data loaded!</p>
    </div>
  );
};

export default Home;
