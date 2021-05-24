import Note from "./Note";

const NoteFeed = ({ notes }) => (
  <>
    {notes.map((note) => (
      <Note note={note} />
    ))}
  </>
);
export default NoteFeed;
