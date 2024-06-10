import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function NavBar() {
  return (
    <nav className="w-screen flex justify-end p-4 bg-[#58FFE6]">
      <Rating />
      <div className="w-36">
        <ul className="font-semibold flex justify-between p-1">
          <li className="text-xl">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl">
            <Link to="/owner">
              Owner
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
