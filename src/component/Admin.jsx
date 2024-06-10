import React, { useState } from "react";
import { Link } from "react-router-dom";

function AdminPage({ users, setUsers }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    position: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, position } = form;
    if (!firstName || !lastName || !position) {
      alert("Input is empty");
      return;
    }
    setUsers([...users, form]);
    setForm({ firstName: "", lastName: "", position: "" });
  };

  const handleDelete = (index) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (isConfirmed) {
      setUsers(users.filter((currentUser, currentIndex) => currentIndex !== userIndex));
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 gap-8">
      <div className="text-5xl">Generation Thailand</div>
      <div className="text-5xl">Admin - Home Sector</div>
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
      <div className="flex flex-row">
        <div className="relative">
          <label
            htmlFor="inputname"
            class="block text-gray-800 font-semibold text-sm"
          >
            First Name
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div className="relative">
        <label
            htmlFor="inputname"
            class="block text-gray-800 font-semibold text-sm"
          >
            Last Name
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <div className="relative">
        <label
            htmlFor="inputname"
            class="block text-gray-800 font-semibold text-sm"
          >
            Position
          </label>
          <div class="mt-2">
            <input
              type="text"
              name="position"
              value={form.position}
              onChange={handleChange}
              required
              class="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
            />
          </div>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="group cursor-pointer outline-none hover:rotate-90 duration-300 ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-red-400 fill-none group-hover:fill-red-800 group-active:stroke-red-200 group-active:fill-red-600 group-active:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              stroke-width="1.5"
            ></path>
            <path d="M8 12H16" stroke-width="1.5"></path>
            <path d="M12 16V8" stroke-width="1.5"></path>
          </svg>
        </button>
      </div>
      <table className="table-fixed">
        <thead>
          <tr className="bg-[#58FFE6]">
            <th className="px-20 rounded-full">Name</th>
            <th className="px-20 rounded-full"> Last Name</th>
            <th className="px-8 rounded-full">Position</th>
            <th className="px-10 rounded-full">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border border-gray-400">{user.firstName}</td>
              <td className="border border-gray-400">{user.lastName}</td>
              <td className="border border-gray-400">{user.position}</td>
              <td className="border border-gray-400 flex items-center justify-center">
                <button
                  onClick={() => handleDelete(index)}
                  className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
                >
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
