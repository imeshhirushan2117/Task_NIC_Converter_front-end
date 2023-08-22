import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="App">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Password" />
          <button to={"/nic"}>Login</button>
        </form>
        <Link to={"/singup"}> Don't have an account? Register</Link>
      </div>
    </div>
  );
};
export default Login;
