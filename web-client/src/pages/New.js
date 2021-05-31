import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import Loading from "../components/Loading";
import NoteForm from "../components/NoteForm";
import { NEW_NOTE } from "../gql/mutation";
import { GET_MY_NOTES, GET_NOTES } from "../gql/query";

const NewNote = (props) => {
  useEffect(() => {
    document.title = "New note - Note app";
  });
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],
    onCompleted: (data) => {
      props.history.push(`note/${data.newNote.id}`);
    },
  });
  return (
    <>
      {loading && <Loading />}
      {error && <p> Error! saving the note</p>}
      <NoteForm action={data} />
    </>
  );
};
export default NewNote;
