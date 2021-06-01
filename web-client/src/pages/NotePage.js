import { useQuery } from "@apollo/client";
import ErrorText from "../Components/Error";
import Loading from "../Components/Loading";
import Note from "../Components/Note";
import { GET_NOTE } from "../gql/query";

const NotePage = (props) => {
  const id = props.match.params.id;
  const { data, loading, error } = useQuery(GET_NOTE, {
    variables: { id },
  });
  if (loading) return <Loading />;
  if (error) return <ErrorText>{error}</ErrorText>;
  return <Note note={data.note} />;
};
export default NotePage;
