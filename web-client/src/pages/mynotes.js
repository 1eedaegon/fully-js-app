import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import ErrorText from "../components/Error";
import Loading from "../components/Loading";
import NoteFeed from "../components/NoteFeed";
import { GET_MY_NOTES } from "../gql/query";

const MyNotes = () => {
  useEffect(() => {
    document.title = "My notes - Note App";
  });
  const { loading, error, data } = useQuery(GET_MY_NOTES);
  if (loading) return <Loading />;
  if (error) return <ErrorText>{error}</ErrorText>;
  if (data.me.notes.length !== 0) return <NoteFeed notes={data.me.notes} />;
  return <ErrorText>{{ message: "Not found notes!" }}</ErrorText>;
};
export default MyNotes;
