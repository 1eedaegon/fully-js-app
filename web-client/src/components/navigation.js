import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="favorites">Favorites</Link>
        </li>
        <li>
          <Link to="mynotes">My notes</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
