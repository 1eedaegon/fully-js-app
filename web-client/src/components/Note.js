import ReactMarkdown from "react-markdown";
import { format, parseISO } from "date-fns";
import styled from "styled-components";

const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;
const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: flex-start;
  }
`;
const MetaInfo = styled.div`
  padding-right: 1em;
`;
const UserActions = styled.div`
  margin-left: auto;
`;

const Note = ({ note }) => (
  <StyledNote key={note.id}>
    <MetaData>
      <MetaInfo>
        <img
          src={note.author.avatar}
          alt={note.author.username}
          height="50px"
        />
      </MetaInfo>
      <MetaInfo>
        {" "}
        <em>by</em> {note.author.username}
        <br />
        {format(parseISO(note.createdAt), "MM Do yyyy")}{" "}
      </MetaInfo>
    </MetaData>
    <UserActions>
      <em>Favorites:</em> {note.favoriteCount}{" "}
    </UserActions>
    <ReactMarkdown children={note.content} />
  </StyledNote>
);
export default Note;
