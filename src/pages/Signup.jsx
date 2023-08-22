import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        contact: "",
        email: "",
        nic: "",
        gender: "",
        year: "",
        month: "",
        day: "",
        username: "",
        password: "",
      });

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name] : value,
    }))
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post(
            "http://localhost:8080/users/",
            formData
        )
        console.log("Responese:", response.data)
    }catch(err){
        console.error("Error: ",err)
    }
}
  
return(
    <div className="App">
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                <input type="text" name ="address" placeholder="Address" onChange={handleChange}/>
                <input type="text" name ="contact" placeholder="Contact" onChange={handleChange}/>
                <input type="text" name ="email" placeholder="Email" onChange={handleChange}/>
                <input type="text" name ="nic" placeholder="Nic" onChange={handleChange}/>
                <p>
                    <input type="text" name="gender" placeholder="Gender" onChange={handleChange}/>
                    <input type="text" name="year" placeholder="Year" onChange={handleChange}/>
                    <input type="text" name="month" placeholder="Month" onChange={handleChange}/>
                    <input type="text" name="day" placeholder="Day" onChange={handleChange}/>
                </p>
                <input type="text" name ="username" placeholder="User Name" onChange={handleChange}/>
                <input type="text" name ="password" placeholder="Password" onChange={handleChange}/>
                
                <button type="submit">Register</button>
            </form>
            <Link to="/">Already have an account? Sign in</Link>
        </div>
    </div>
);

};
export default Signup;