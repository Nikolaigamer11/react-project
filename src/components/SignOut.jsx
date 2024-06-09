import React from "react"; // Importing React library for building UI components
import { auth } from "../firebaseConfig"; // Importing the auth object from the Firebase configuration file
import { Navigate } from "react-router-dom";

// Logout component to handle user logout
export default function Logout() {
  const handleLogout = () => {
    try {
      auth.signOut();

      // Sign out the user
    } catch (error) {
      // Handle potential errors during sign out (currently no error handling logic)
    }
    alert("User logged out"); // Alert the user that they have been logged out
  };

  return (
    // Centered container for the logout UI
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Logout</h2> {/* Logout title */}
        <p className="mb-6">Are you sure you want to log out?</p>{" "}
        {/* Confirmation message */}
        <button
          onClick={handleLogout} // Logout button with an onClick handler
          className="py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
