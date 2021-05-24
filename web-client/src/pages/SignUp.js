import { useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";

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

const SignUp = (props) => {
  useEffect(() => {
    document.title = "Sign Up - Note app";
  });
  return (
    <Wrapper>
      <Form>
        <label for="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="Name"
        />
        <label for="email">E-mail:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="e-mail"
        />
        <label for="password">Password</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  );
};
export default SignUp;
