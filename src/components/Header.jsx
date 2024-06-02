import { onAuthStateChanged } from "firebase/auth";
import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { RouteSignUp } from "./Pro_Routing";

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        return;
      }

      setUser(null);
    });
    return () => unsub();
  });

  return (
    <header>
      <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="text-lg font-semibold">
              Clean Bin
            </NavLink>
            <ul className="ml-4 flex space-x-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="mr-4 p-2 rounded-md border border-gray-400"
            />
            <RouteSignUp user={user}>

              <NavLink to="/user">
                <i className="fa-solid fa-house-user"></i>
              </NavLink>
            </RouteSignUp>

            <NavLink to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
            <button></button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
