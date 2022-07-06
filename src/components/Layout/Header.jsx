import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GrMenu, GrClose } from "react-icons/gr";

const Header = () => {
  const navigate = useNavigate();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };
  const user = localStorage.getItem("username");
  return (
    <header className="h-20 w-full bg-amber-700 text-white">
      <nav className=" max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className=" text-2xl font-semibold uppercase ml-2">
          <Link to="/">bambumeta</Link>
        </div>
        <ul className=" flex space-x-4 mr-4">
          {user ? (
            <div className=" flex space-x-4 justify-center text-white items-center">
              <GrMenu
                className="text-4xl text-gray-50 white-color"
                onClick={() => setSideMenuOpen(!sideMenuOpen)}
              />
              {sideMenuOpen && (
                <div className="fixed top-0 right-0 md:w-[20%] w-1/2 bg-amber-800 h-screen flex justify-center  transition-all delay-700">
                  <ul className="flex space-y-4 flex-col mt-24 w-full mx-2">
                    <div className="absolute top-5 right-8">
                      <GrClose
                        className=" text-3xl cursor-pointer white-color"
                        onClick={() => setSideMenuOpen(false)}
                      />
                    </div>
                    <li className=" ml-2 text-xl w-40 text-ellipsis overflow-clip">
                      Hello : {user}
                    </li>
                    <li className="w-full">
                      <button
                        className="bg-amber-600 w-full text-xl font-semibold px-4 py-2"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className=" flex space-x-4 justify-center items-center">
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
