import logo from "../img/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <header>
        <img src={logo} alt="Note app logo" />
        <h1>Note App header</h1>
      </header>
    </div>
  );
};
export default Header;
