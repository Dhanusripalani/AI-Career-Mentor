import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";


function Register() {

  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleRegister() {


    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;



    // Name validation
    if(name === "") {

      alert("Please enter your name ❌");
      return;

    }



    // Email validation
    if(!emailPattern.test(email)) {

      alert("Enter valid email address ❌");
      return;

    }



    // Password validation
    if(!passwordPattern.test(password)) {

      alert(
        "Password must contain minimum 8 characters, one number and one special character ❌"
      );

      return;

    }



    // Save user details temporarily
    localStorage.setItem(
      "user",
      JSON.stringify({
        name,
        email,
        password
      })
    );


    alert("Register Successful ✅");


    navigate("/login");

  }



  return (

    <div className="auth-container">

      <div className="auth-box">


        <h1>
          Create Account 🚀
        </h1>


        <p>
          Join AI Career Mentor
        </p>



        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />



        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />



        <input
           type={showPassword ? "text" : "password"}
           placeholder="Password (Eg: Aruna@123)"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
        />

        <button
           type="button"
           onClick={() => setShowPassword(!showPassword)}
        >
        {showPassword ? "Hide Password 🙈" : "Show Password 👁️"}
        </button>



        <button onClick={handleRegister}>
          Register
        </button>



      </div>

    </div>

  );

}


export default Register;