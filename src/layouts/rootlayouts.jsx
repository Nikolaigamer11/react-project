import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import { useAuth } from "../components/AuthProvider";

export default function RootLayouts() {
  const { user, loading } = useAuth();
  
  // Return early if loading to avoid flickering UI
  if (loading) return <div>Loading...</div>;

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
                <NavLink to="/Home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Shop</NavLink>
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
            {!user ? (
              <NavLink className="pr-2 border border-blue-600" to="/SignUp">
                Log in
              </NavLink>
            ) : (
              <>
                <NavLink className="pr-2 border border-red-600" to="/SignOut">
                  Sign Out
                </NavLink>
                <NavLink className="pr-2 border border-blue-600" to="/cart">
                  Cart
                </NavLink>
              </>
            )}
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
