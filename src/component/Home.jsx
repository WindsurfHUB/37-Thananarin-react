import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Clock from "./Analog";
import Time from "./Clock";

function HomePage() {
  return (
    <div className="h-auto flex flex-col items-center mt-16 gap-16">
      <h1 className="flex justify-center text-5xl">
        Generation Thailand <br />
        React - Assessment
      </h1>
      <div className="flex justify-center gap-5">
        <Link to="/user">
          <button className="text-zinc-700 hover:text-[#52ebd4] backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-[#58FFE6] duration-700">
            User Home Sector
          </button>
        </Link>
        <Link to="/admin">
          <button className="text-zinc-700 hover:text-[#52ebd4] backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-[#58FFE6] duration-700">
            Admin Home Sector
          </button>
        </Link>
      </div>
      <div className="pt-12 text-2xl">
        <Time />
      </div>
      <div className="mt-12">
        <Clock />
      </div>
    </div>
  );
}

export default HomePage;
