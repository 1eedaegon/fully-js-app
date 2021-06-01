import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import MyNotes from "./MyNotes";
import Layout from "../Components/Layout";
import NotePage from "./NotePage";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useQuery } from "@apollo/client";
import NewNote from "./New";
import { IS_LOGGED_IN } from "../gql/query";
import Loading from "../Components/Loading";
import EditPage from "./EditPage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) return <Loading />;
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
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/mynotes" component={MyNotes} />
          <PrivateRoute path="/favorites" component={Favorites} />
          <Route path="/note/:id" component={NotePage} />
          <PrivateRoute path="/edit/:id" component={EditPage} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <PrivateRoute path="/new" component={NewNote} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default Pages;
