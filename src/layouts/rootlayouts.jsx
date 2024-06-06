import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import useAuthStatus from "../components/Pro_Routing";
// import { auth } from "../firebaseConfig";

export default function RootLayouts() {
  const isLoggedIn = useAuthStatus;
  console.log(isLoggedIn);

  return (
    <div>
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
              {isLoggedIn && <NavLink className="pr-2 border border-blue-600 " to="/SignUp">
             Log in</NavLink>}

             {!isLoggedIn && <NavLink className="pr-2 border border-red-600" to="/SignOut">
             Sign Out</NavLink>}
            
            {!isLoggedIn && <NavLink className="pr-2 border border-blue-600" to="/cart">
             Cart
            </NavLink>}

            {/* {!isLoggedIn && <NavLink className="pr-2 border border-red-600" to="/cart"> */}
             
            {/* </NavLink>} */}
            <button></button>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
