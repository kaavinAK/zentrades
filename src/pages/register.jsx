import logo from '../logo.svg';
import '../App.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
 let [email,setEmail]=useState("")
 let [password,setPassword]=useState("");
 let [allowSubmit,setAllowSubmit]=useState(false); 
 let [errorState,setErrorState]=useState(false);
 let navigate=useNavigate()
 useEffect(()=>{
  if(validateEmail(email) && validatePassword(password)){
    setAllowSubmit(true)
  }else{
    setAllowSubmit(false)
  }
 },[email,password])
 const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function validatePassword(password) {
  // Regular expression to match the conditions
  var regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;

  // Test if the password matches the regex
  if (regex.test(password)) {
      return true; // Password is valid
  } else {
      return false; // Password is invalid
  }
}
 let submitForm=()=>{
   if(password=="ZenTradesTest@123"){
    localStorage.setItem("flag",true)
  navigate("/dashboard")
      }else{
        setErrorState(true)
        setTimeout(()=>{
            setErrorState(false)
        },5000)
      }
 }
  return (
    
    <div className="container">
    <div className="image"></div>
    <div className="content">
        <div className="icon">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmnDo0B3Bmm26QNT01K-o-XZYe-l5dCllEtgJz3j5dGarCqkAPZaLop3lXdCWq7mOQddc&usqp=CAU"/>
        <h1 className="header">ZENTRADES</h1>
        </div>
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail address"
          required
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
          onChange={(e)=>{setPassword(e.target.value)}}
          value={password}
        />
        {errorState && <p className="error">Incorrect password</p>}
        
        <label for="remember"
          ><input type="checkbox" id="remember" name="remember" />Remember
          me
        </label>
        <label></label>
        <button onClick={submitForm} disabled={!allowSubmit}>Sign In</button>
      
      <a href="mailto:support@zentrades.pro?subject=Password%20Reset&body=Please%20reset%20my%20password." className="forgot">Forgot your password?</a>
      
      
    </div>
  </div>
  );
}

export default App;