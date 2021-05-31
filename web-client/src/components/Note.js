import ReactMarkdown from "react-markdown";
import { format, parseISO } from "date-fns";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../gql/query";
import Loading from "./Loading";
import ErrorText from "./Error";
import NoteUser from "./NoteUser";

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

const Note = ({ note }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <Loading />;
  if (error) return <ErrorText>{error}</ErrorText>;

  return (
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
        {data.isLoggedIn ? (
          <UserActions>
            <NoteUser note={note} />
          </UserActions>
        ) : (
          <UserActions>
            <em>Favorites:</em> {note.favoriteCount}{" "}
          </UserActions>
        )}
      </MetaData>
      <ReactMarkdown children={note.content} />
    </StyledNote>
  );
};
export default Note;
