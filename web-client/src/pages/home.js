import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="home">
      <h1>Hello Home world.</h1>
      <ul>
        <li>
          <Link to="mynotes">Show my notes</Link>
        </li>
        <li>
          <Link to="favorites">Show my favorites</Link>
        </li>
      </ul>
    </div>
  );
};

export default home;
