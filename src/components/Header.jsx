import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="bg-gray-800 text-white p-4 sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <NavLink to="/" className="text-lg font-semibold">Clean Bin</NavLink>
                    <ul className="ml-4 flex space-x-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/shop">Shop</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <input type="text" placeholder="Search" className="mr-4 p-2 rounded-md border border-gray-400" />
                    <button className="mr-4">
                        {/* Cart icon and logic here */}
                    </button>
                    <button>
                        
                    </button>
                </div>
            </div>
        </nav>
        </header>
    );
};

export default Header;
