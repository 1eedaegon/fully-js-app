import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Favorites from "./favorites";
import MyNotes from "./mynotes";

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/mynotes" component={MyNotes} />
    </Router>
  );
};
export default Pages;
