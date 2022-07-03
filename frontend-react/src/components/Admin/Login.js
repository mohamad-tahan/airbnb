import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

async function loginUser(credentials) {

  return fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => response.json());
}

function Login() {
    let nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password,
    });

    if ("access_token" in response) {
      try {
        alert("Success");
        
        
        localStorage.setItem("access_token", response["access_token"]);
        localStorage.setItem("token_type", JSON.stringify(response['token_type']));
        nav("/admin");
      } catch {
        alert("Failed");
        console.log(response);
      }
    } else {
      alert("You are not Authorized");
    }
  };


  return (
    <div className="background">
    <div className="loginBox" id="loginBox">
      <h2 className="title">LOG IN</h2>
      <form name="login" onSubmit={handleSubmit}>
        <div className="inputBox">
          <label className="logColor">Email</label>
          <input
            id="email"
            type="email"
            
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="logColor">Password</label>
          <input
            id="password"
            type="password"
            
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="log" value="Login" id="login" type="submit">
          Login
        </button>
        
     </form>
    </div>
    </div>
  );
}

export default Login;
