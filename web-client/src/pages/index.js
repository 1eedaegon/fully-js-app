import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Favorites from "./favorites";
import MyNotes from "./mynotes";
import Layout from "../components/layout";

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
