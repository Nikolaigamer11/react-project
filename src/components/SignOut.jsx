import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';


export default function useAuthStatus (auth) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setIsLoggedIn(true)
                console.log(setIsLoggedIn);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return isLoggedIn;
};

export const Logout = () => {
  const handleLogout = () => {
    try {
      auth.signOut();
      
    } catch (error) {
      
    }
    alert('User logged out');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Logout</h2>
        <p className="mb-6">Are you sure you want to log out?</p>
        <button
          onClick={handleLogout}
          className="py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

