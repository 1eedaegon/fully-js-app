import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect } from "react";
import { IS_LOGGED_IN } from "../cache";
import UserForm from "../components/UserForm";
import { SIGNIN_USER } from "../gql/mutation";

const SignIn = (props) => {
  useEffect(() => {
    document.title = "Sign in - Note app";
  });

  const [signIn, { client, loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted: (data) => {
      localStorage.setItem("token", data.signIn);
      client.writeQuery({
        query: IS_LOGGED_IN,
        data: !!localStorage.getItem("token"),
      });
      props.history.push("/");
    },
  });
  return (
    <>
      <UserForm action={signIn} formType="signin" />
      {loading && <p>Now loading...</p>}
      {error && <p>Sign in error!</p>}
    </>
  );
};
export default SignIn;
