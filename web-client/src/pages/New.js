import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect } from "react";
import NoteForm from "../components/NoteForm";
import { NEW_NOTE } from "../gql/mutation";

const NewNote = (props) => {
  useEffect(() => {
    document.title = "New note - Note app";
  });
  const [data, { loading, error }] = useMutation(NEW_NOTE, {
    onCompleted: (data) => {
      props.history.push(`note/${data.newNote.id}`);
    },
  });
  return (
    <>
      {loading && <p>Now loading...</p>}
      {error && <p> Error! saving the note</p>}
      <NoteForm action={data} />
    </>
  );
};
export default NewNote;
