import gql from "graphql-tag";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Form from "../components/Form";

// Return JsonWebToken string separated by 3dots
const SIGNUP_USER = gql`
  mutation SignUp($username: String, $email: String, $password: String) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

const HomeWrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const SignUp = (props) => {
  const [values, setValues] = useState();
  const onChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  useEffect(() => {
    document.title = "Sign Up - Note app";
  });

  return (
    <HomeWrapper>
      <Form>
        <label for="username">Username:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="Name"
          onChange={onChange}
        />
        <label for="email">E-mail:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="e-mail"
          onChange={onChange}
        />
        <label for="password">Password</label>
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
    </HomeWrapper>
  );
};
export default SignUp;
