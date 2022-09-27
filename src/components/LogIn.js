import React, { useState } from "react";
import './LogIn.css'


export default function LogIn() {

  const [user, setUser] = useState({
    Email: "",
    Password: ""
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: [value] });
  };

  return (
    <div>
      <div className="container">
        <center>
          <h1>Log-in</h1>
        </center>
        <form action="" className="login">
          <div className="box">
            <label htmlFor="">Enter Your Email</label>
            <input type="text" placeholder="Email" className="field" required name="Email" value={user.Email} onChange={getUserData} />
          </div>
          <div className="box">
            <label htmlFor="">Enter your Password</label>
            <input type="password" placeholder="Password" className="field" required name="Password" value={user.Password} onChange={getUserData} />
          </div>
          <center>
            <div className="btn btn-b">Log In</div>
          </center>
        </form>
      </div>
    </div>
  );
}
