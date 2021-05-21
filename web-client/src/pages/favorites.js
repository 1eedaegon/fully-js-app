import { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    document.title = "Favorites - Note App";
  });
  return (
    <div className="favorites">
      <h1>This is favorites Page.</h1>
    </div>
  );
};
export default Favorites;
