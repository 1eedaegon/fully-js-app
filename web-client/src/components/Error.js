import styled from "styled-components";

const ErrorParagraph = styled.p``;
const ErrorText = ({ children }) => {
  return <ErrorParagraph>‼️ Error: {children.message}</ErrorParagraph>;
};
export default ErrorText;
