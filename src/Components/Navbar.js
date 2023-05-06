import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <Link to="/" className="mr-auto">
        <img src="/logo.png" alt="DoorDash" className="h-10 w-10" />
      </Link>
    </div>
    <div className="flex-grow text-center">
      <Link to="/Items" className="text-gray-300 hover:text-white mx-5 font-bold text-lg">Items</Link>
    </div>
    <div className="flex items-center">
      <Link to="/Cart">
      <button className="bg-white text-gray-900 rounded-full py-2 px-4">
        <img src="/cart.svg" alt="" className="h-6" />
      </button>
      </Link>
    </div>
  </div>
</nav>
  );
}

export default Navbar;



