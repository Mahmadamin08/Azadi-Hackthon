import React from "react";
import { useState } from "react";
import './SingUp.css';

const SingUp = () => {

    const [user, setUser] = useState({
        userName: "",
        userEmail: "",
        userPassword: "",
        userPhoneNo: "",
    });


    let name, value;
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: [value] });
    };
    return (
        <>
            <div className="singup">
                <div className="container ">
                    <form action="#">
                        <h1>Artist Registration</h1>
                        <div className="row">
                            <h2>Full Name</h2>
                            <div className="field">
                                <input type="text" required name="userName" value={user.userName} onChange={getUserData} placeholder="Enter Your Full Name " />
                                <i className="fa fa-user" />
                            </div>
                        </div>
                        <div className="row">
                            <h2>Email</h2>
                            <div className="field">
                                <input type="text" required name="userEmail" value={user.userEmail} onChange={getUserData} placeholder="Enter Your Email" />
                                <i className="fa fa-envelope-o" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="row">
                            <h2>Mobile No.</h2>
                            <div className="field">
                                <input type="text" required name="userPhoneNo" value={user.userPhoneNo} onChange={getUserData} placeholder="Enter Your Mobile No." />
                                <i className="fa fa-phone" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="row">
                            <h2>Password</h2>
                            <div className="field">
                                <input type="text" required name="userPassword" value={user.userPassword} onChange={getUserData} placeholder="Enter Your Password" />
                                <i className="fa fa-eye" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="info">
                            <input type="checkbox" name id defaultChecked />
                            <p>
                                I Agree With <span className="blue">Terms Of Services</span> and
                                <span className="blue"> Privacy Policy. </span>
                            </p>
                        </div>
                        <div className="row">
                            <div className="btn">Sign Up</div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default SingUp;
