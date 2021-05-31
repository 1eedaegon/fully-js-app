import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import Loading from "../components/Loading";
import UserForm from "../components/UserForm";
import { SIGNIN_USER } from "../gql/mutation";
import { IS_LOGGED_IN } from "../gql/query";

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
      {loading && <Loading />}
      {error && <p>Sign in error!</p>}
    </>
  );
};
export default SignIn;
