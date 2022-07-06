import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 w-full bg-amber-700 text-white">
      <nav className=" max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className=" text-3xl font-semibold uppercase ml-2">
          <Link to="/">Logo</Link>
        </div>
        <ul className=" flex space-x-4 mr-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
