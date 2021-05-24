import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorite";
import MyNotes from "./MyNotes";
import Layout from "../components/Layout";
import NotePage from "./NotePage";
import SignUp from "./SignUp";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/note/:id" component={NotePage} />
      </Layout>
    </Router>
  );
};
export default Pages;
