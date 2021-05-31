import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Button from "../components/Button";

import NoteFeed from "../components/NoteFeed";
import { GET_NOTES } from "../gql/query";

const Home = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
  // const getNextPage;
  if (loading) return <p>Now loading....</p>;
  if (error) return <p>Error!</p>;
  return (
    <>
      <NoteFeed notes={data?.noteFeed?.notes} />
      {data?.noteFeed?.hasNextPage && (
        <Button
          cursor={data.noteFeed.cursor}
          onClick={() => {
            return fetchMore({
              variables: {
                cursor: data.noteFeed.cursor,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  noteFeed: {
                    cursor: fetchMoreResult.noteFeed.cursor,
                    hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
                    notes: [
                      ...previousResult.noteFeed.notes,
                      ...fetchMoreResult.noteFeed.notes,
                    ],
                    _typename: "noteFeed",
                  },
                };
              },
            });
          }}>
          더 보기
        </Button>
      )}
    </>
  );
};

export default Home;
