import { useEffect } from "react";

const MyNotes = () => {
  useEffect(() => {
    document.title = "My notes - Note App";
  });
  return (
    <div className="mynotes">
      <h1>Hello this is my notes</h1>
    </div>
  );
};
export default MyNotes;
