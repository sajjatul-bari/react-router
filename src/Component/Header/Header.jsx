import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="py-10 bg-green-900">
      <ul className="space-x-10 text-white w-full text-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/comments">Comments</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
