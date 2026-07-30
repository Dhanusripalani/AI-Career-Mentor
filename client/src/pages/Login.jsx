import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";



function Login() {

  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  function handleLogin() {


    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );



    if(!storedUser) {

      alert("Please Register First ❌");
      navigate("/register");
      return;

    }



    if(
      email === storedUser.email &&
      password === storedUser.password
    ) {


      alert("Login Successful ✅");


      navigate("/dashboard");


    }

    else {


      alert("Invalid Email or Password ❌");


    }


  }



  return (

    <div className="auth-container">

      <div className="auth-box">


        <h1>
          Welcome Back👋
        </h1>


        <p>
          Login to AI Career Mentor
        </p>



        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />



        <input
           type={showPassword ? "text" : "password"}
           placeholder="Password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password 🙈" : "Show Password 👁️"}
        </button>


        <button onClick={handleLogin}>
          Login
        </button>


      </div>

    </div>

  );

}


export default Login;