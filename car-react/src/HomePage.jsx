import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
let url = "http://localhost:8080/car/login";

function HomePage() {
  const [message, setMessage] = useState("");
  const [gmail, setGmail] = useState("");
  const [pass, setPass] = useState("");
  const native = useNavigate();

  let loginObj = () => {
    return {
      email: gmail,
      password: pass,
    };
  };

  let submitLogin = async (e) => {
    e.preventDefault();
    let data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj()),
    });
    if (!await data.json()) {
      console.log("byeee");
      setMessage("Email Id or Password is invalid (or) New to Website Create a signup with us");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      native("/first-page", { replace: true });
    }
  };

  return (
    <div className="login-container">
        <h1>Login Page</h1>
      <form className="login-form" onSubmit={submitLogin}>
        <div className="form-group">
          <label className="form-label">Enter The Email Id:</label>
          <input
            type="email"
            className="form-input"
            onChange={(e) => setGmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Enter The Password:</label>
          <input
            type="password"
            className="form-input"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button className="submit-button-home" type="submit">Submit</button>
      </form>
      <p className="login-message">{message}</p>
      <Link className="signup-link"  to="/signup">Sign Up</Link>
    </div>
  );
}

export default HomePage;





























// import React from "react";
// import { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// let url="http://localhost:8080/car/login";
// function HomePage(){
//     const[message,setMessage]=useState("");
//     const[gmail,setGmail]=useState("");
//     const[pass,setPass]=useState("");
//     const native=useNavigate();
//     let loginObj=()=>{
//        return{
//             email:gmail,
//             password:pass
//        }
//     }
//     let submitLogin=async (e)=>{
//         e.preventDefault();
//         let data=await fetch(url,{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify(loginObj()),
//         });
//         if(!await data.json()){
//             console.log("byeee");
//             setMessage("Email Id or Password is invalid (or) New to Website Create a signup with us");
//             setTimeout(() => {
//                 setMessage("");
//             }, 3000);
//         }
//         else{
//             native("/first-page",{replace:true});
//         }
//     }
//     return(
//         <div>
//             <form onSubmit={submitLogin}>
//                 <label>Enter The Email Id:
//                         <input type="email" onChange={(e)=>{setGmail(e.target.value)}}/>
//                 </label>    
//                 <label>Enter The Password:
//                     <input type="password" onChange={(e)=>{setPass(e.target.value)}}/>
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>  
//             <p>{message}</p>
//             <Link to="/signup">SignUp</Link>
//         </div>
//     )
// }
// export default HomePage;