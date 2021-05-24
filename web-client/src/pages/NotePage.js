import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Note from "../components/Note";

const GET_NOTE = gql`
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
const NotePage = (props) => {
  const id = props.match.params.id;
  const { data, loading, error } = useQuery(GET_NOTE, {
    variables: { id },
  });
  if (loading) return <p>Now loading...</p>;
  if (error) return <p>Umm... something error: {error}</p>;
  return <Note note={data.note} />;
};
export default NotePage;
