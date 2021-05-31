import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import Loading from "../components/Loading";

import UserForm from "../components/UserForm";
import { SIGNUP_USER } from "../gql/mutation";
import { IS_LOGGED_IN } from "../gql/query";

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
      {loading && <Loading />}
      {error && <p>Error creating an account</p>}
    </>
  );
};
export default SignUp;
