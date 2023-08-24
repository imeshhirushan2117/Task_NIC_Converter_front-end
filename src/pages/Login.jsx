import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="App">
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>
            <Link to={"/signin"}  style={{ textDecoration: "none", color: "white"}}>Login</Link>
          </button>
        </form>
        <Link to={"/singup"} style={{ textDecoration: "none", color: "black"}}>Don't have an account? Register</Link>
     
 
      </div>
    </div>
  );
};
export default Login;
