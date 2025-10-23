import { Link } from "react-router-dom";

const NAVBAR = () => {
  const isLoggedIn = localStorage.getItem("loggedIn");
  return (
    <>
      <div className="nav_bar">
        <div className="version">To Do APP</div>
        <div className="menu_items">
          <Link to="/">
            <div>Home</div>
          </Link>
          <Link to="/add">
            <div>Add To Do</div>
          </Link>
          <Link to="/log">
            {isLoggedIn ? <div>Profile</div> : <div>LOG IN</div>}
          </Link>
        </div>
      </div>
    </>
  );
};
export default NAVBAR;
