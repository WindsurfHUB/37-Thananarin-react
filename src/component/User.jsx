import React from "react";
import { Link } from "react-router-dom";

function UserPage({ users }) {
  return (
    <div className="flex flex-col items-center mt-8 gap-8">
      <div className="text-5xl">Generation Thailand</div>
      <h1 className="text-5xl flex justify-center">User - Home Sector</h1>
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
      <table>
        <thead>
          <tr className="bg-[#58FFE6]">
            <th className="px-20 rounded-full">Name</th>
            <th className="px-20 rounded-full"> Last Name</th>
            <th className="px-8 rounded-full">Position</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="bg-[#58ffE6] bg-opacity-40">
              <td className="px-20 rounded-full">{user.firstName}</td>
              <td className="px-20 rounded-full">{user.lastName}</td>
              <td className="px-8 rounded-full">{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
