import React from "react";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import Home from "./components/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import SingUp from "./components/SIngUp";
import AdminLogin from "./components/AdminLogin";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/singUp" element={<SingUp />} />

        </Routes>
        <Home />
      </div>
    </Router>
  );
};

export default App;
