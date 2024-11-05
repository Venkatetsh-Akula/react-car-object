import React, { useState } from "react";
import { Link } from "react-router-dom";

let url = "http://localhost:8080/car/signup";

function SignUpPage() {
  const [message, setMessage] = useState("");
  const [gmail, setGmail] = useState("");
  const [pass, setPass] = useState("");

  let loginObj = () => {
    return {
      email: gmail,
      password: pass,
    };
  };

  let createAccount = async (e) => {
    e.preventDefault();
    let data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj()),
    });
    if (await data.json()) {
      setMessage("Login Account Created Successfully");
    } else {
      setMessage("Email Already Exists");
    }
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <div className="signup-container">
        <h1>Sign Up Page</h1>
      <form className="signup-form" onSubmit={createAccount}>
        <div className="form-group">
          <label className="form-label">Enter The User Email Id:</label>
          <input
            type="email"
            className="form-input"
            onChange={(e) => setGmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Enter The User Password:</label>
          <input
            type="password"
            className="form-input"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button className="submit-button-signup" type="submit">Submit</button>
      </form>
      <Link className="login-link" to="/">Login Page</Link>
      <p className="signup-message">{message}</p>
    </div>
  );
}

export default SignUpPage;
