import ReactMarkdown from "react-markdown";
import { format, parseISO } from "date-fns";

const Author = ({ note }) => {
  //   import { format } from "date-fns";
  return (
    <>
      {" "}
      {note.author.username} {format(parseISO(note.createdAt), "MM Do yyyy")}{" "}
      Favorites: {note.favoriteCount}{" "}
    </>
  );
};

const MarkdownContent = ({ content }) => <ReactMarkdown children={content} />;

const Note = ({ note }) => (
  <article key={note.id}>
    <img
      src={note.author.avatar}
      alt="{note.author.username} avatar"
      height="50px"
    />
    <Author note={note} />
    <MarkdownContent content={note.content} />
  </article>
);
export default Note;
