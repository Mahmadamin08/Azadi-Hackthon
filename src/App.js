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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Home />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
