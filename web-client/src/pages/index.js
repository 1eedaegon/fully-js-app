import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorite";
import MyNotes from "./MyNotes";
import Layout from "../components/Layout";
import NotePage from "./NotePage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "../cache";
import NewNote from "./New";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <p>Now loading...</p>;
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={(props) =>
        data.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/mynotes" component={MyNotes} />
        <PrivateRoute path="/favorites" component={Favorites} />
        <PrivateRoute path="/new" component={NewNote} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/note/:id" component={NotePage} />
      </Layout>
    </Router>
  );
};
export default Pages;
