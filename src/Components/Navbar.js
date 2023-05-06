import React from "react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <Link to="/" className="mr-auto">
        <img src="data:image/png;base64,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" alt="/logo.png" className="h-10 w-10" />
      </Link>
    </div>
    <div className="flex-grow text-center">
      <Link to="/Items" className="text-gray-300 hover:text-white mx-5 font-bold text-lg">Items</Link>
    </div>
    <div className="flex items-center">
      <Link to="/Cart">
      <button className="bg-white text-gray-900 rounded-full py-2 px-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN3wAcYgtK2nz6SBIK0EZUfs9Tv8nv9V5l8g&usqp=CAU" alt="/cart.svg" className="h-6" />
      </button>
      </Link>
    </div>
  </div>
</nav>
  );
}

export default Navbar;



