import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;
const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }
  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const UserForm = (props) => {
  // States
  const [values, setValues] = useState();
  // Mutation
  // Event handler
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Wrapper>
      {props.formType === "signup" ? <h2>Sign up</h2> : <h2>Sign in</h2>}
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          props.action({
            variables: { ...values },
          });
        }}>
        {props.formType === "signup" && (
          <>
            <label htmlFor="username">Username</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="Name"
              onChange={onChange}
            />
          </>
        )}
        <label htmlFor="email">Email</label>
        <input
          required
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
          onChange={onChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};
export default UserForm;
