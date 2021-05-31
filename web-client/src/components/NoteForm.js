import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  height: 100%;
`;
const Form = styled.form`
  height: 100%;
`;
const TextAria = styled.textarea`
  width: 100%;
  height: 90%;
`;
const NoteForm = (props) => {
  // States
  const [value, setValue] = useState({ content: props.content || "" });

  // Handler
  const onChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.action({
      variables: { ...value },
    });
  };
  // Component
  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <TextAria
          required
          type="text"
          name="content"
          placeholder="Note contents"
          value={value.content}
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};

export default NoteForm;
