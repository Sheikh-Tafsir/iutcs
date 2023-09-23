import React, { useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { Button } from 'react-bootstrap';
import "../../styles/Login.css"
import {FaRegAddressBook} from "react-icons/fa";
// import.meta.env.VITE_USERNAME;

const Adminlogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    

    useEffect(() => {
        //console.log(loggedIn);
    });

    const loginUser = () => {  
        
        //eslint-disable-next-line no-undef
        const usernameFromEnv = import.meta.env.VITE_USERNAME;
        //eslint-disable-next-line no-undef
        const passwordFromEnv = import.meta.env.VITE_PASSWORD;
     
        setLoginStatus("please wait...");
        
        if(username === "" || username == null || username === undefined){
            setLoginStatus("Name is empty");
        }
        else if(password === "" || password == null || password === undefined){
            setLoginStatus("password is empty");
        }

        else if (username === usernameFromEnv && password === passwordFromEnv){
            setLoginStatus("logging in");
            localStorage.setItem("localStorageUsername",username);
            window.location.href = "/admin/panel";
        }
        else{
            setLoginStatus("Wrong id or password");
        }

        document.querySelector(".logfrm").reset();
    };
  
  return (
    <div className="loginpage" >
        <form className="logfrm">
            <h2>Login User</h2>
            <div className="loginCreds">
                <FaRegAddressBook className ="loginCredsIcons"/>
                <input type="text" id="name" name="name" placeholder="Insert Usernanme" value={username} onChange={(event) => {setUsername(event.target.value);}}/><br/>
            </div>
            <div className="loginCreds">
                <FaRegAddressBook className ="loginCredsIcons"/>
                <input type="password" id="pass" name="pass" placeholder="Insert Password" value={password} onChange={(event) => {setPassword(event.target.value);}}/><br/>
            </div>
            <p>{loginStatus}</p><br/>
            <Button className="logfrmbut" onClick={()=>loginUser()}>Login</Button><br/>
        </form>   
    </div>
  )
}

export default Adminlogin