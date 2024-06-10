import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./component/Home";
import UserPage from "./component/User";
import AdminPage from "./component/Admin";
import NavBar from "./component/Nav";
import OwnerPage from "./component/Owner";
import './index.css'


function App() {
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage users={users} />} />
        <Route
          path="/admin"
          element={<AdminPage users={users} setUsers={setUsers} />}
        />
        <Route path="/owner" element={<OwnerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
