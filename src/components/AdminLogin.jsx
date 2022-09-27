import React from 'react';

const AdminLogin = () => {
    return (
        <div className="container">
            <h1>Admin Login</h1>
            <form action="" className="login">
                <div className="box">
                    <label htmlFor="">Select Role</label><br />
                    <select>
                        <option value="clerk">Clerk</option>
                        <option value="dydo">Distric Youth Development Officer</option>
                        <option value="commissioner">Commissioner</option>
                    </select>
                </div>
                <div className="box">
                    <label htmlFor="">Enter Id</label><br />
                    <input type="text" placeholder="id" />
                </div>
                <div className="box">
                    <label htmlFor="">Enter Password</label><br />
                    <input type="password" placeholder="password" />
                </div>
                <div className="login-btn">
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export default AdminLogin;