import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect } from "react";

import { IS_LOGGED_IN } from "../cache";
import UserForm from "../components/UserForm";
import { SIGNUP_USER } from "../gql/mutation";

// Return JsonWebToken string separated by 3dots
const SignUp = (props) => {
  // States
  useEffect(() => {
    document.title = "Sign Up - Note app";
  });

  // Sign up mutation
  const [signUp, { client, error, loading }] = useMutation(SIGNUP_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signUp);
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: !!localStorage.getItem("token"),
      });
      props.history.push("/");
    },
  });
  // Components
  return (
    <>
      <UserForm action={signUp} formType="signup" />
      {loading && <p>Now loading...</p>}
      {error && <p>Error creating an account</p>}
    </>
  );
};
export default SignUp;
