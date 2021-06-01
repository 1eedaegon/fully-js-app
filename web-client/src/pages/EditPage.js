import { useMutation, useQuery } from "@apollo/client";
import ErrorText from "../Components/Error";
import Loading from "../Components/Loading";
import NoteForm from "../Components/NoteForm";
import { EDIT_NOTE } from "../gql/mutation";

import { GET_ME, GET_NOTE } from "../gql/query";

const EditPage = (props) => {
  const id = props.match.params.id;
  const { data: userData } = useQuery(GET_ME);
  const { loading, error, data } = useQuery(GET_NOTE, {
    variables: { id },
  });
  const [editNote, { editLoading, editError }] = useMutation(
    EDIT_NOTE,
    { variables: { id } },
    {
      onCompleted: () => {
        props.history.push(`note/${id}`);
      },
    }
  );

  if (loading || editLoading) return <Loading />;
  if (error || editError) return <ErrorText>{error}</ErrorText>;
  if (userData.me.id !== data.note.author.id) {
    <ErrorText>{{ message: "You cannot update this note!" }}</ErrorText>;
    props.history.push("/");
  }

  return <NoteForm content={data.note.content} action={editNote} />;
};
export default EditPage;
