import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorite";
import MyNotes from "./MyNotes";
import Layout from "../components/Layout";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/mynotes" component={MyNotes} />
      </Layout>
    </Router>
  );
};
export default Pages;
