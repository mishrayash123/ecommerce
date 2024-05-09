import React, { useState } from 'react';
import { useAuth } from "../AuthContext";

const LoginFormWrapper = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const {login, setUser } = useAuth();

  const handleUsernameChange = (event) => {
    setemail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch( 
        "http://localhost:8080/auth/login", 
        {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }), 
        }                                               
                                                      
      );

      if (response.ok) { 
        const data = await response.json();
        const { email } = data;
        setUser({email });
        login();
        localStorage.setItem("paricollectiontoken", data.sessionToken);
        localStorage.setItem("paricollectionuserId", data._id);
         localStorage.setItem("username", data.username);
          localStorage.setItem("email", data.email);
        alert("Logged in successfully");
        navigate("/");
      } else { 
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="absolute top-[calc(50%_-_601px)] left-[calc(50%_-_100px)] shadow-[0px_0px_33.8px_-4px_rgba(0,_0,_0,_0.25)] rounded-lgi bg-white w-[812px] h-[656px] overflow-hidden text-left text-xl text-dimgray-800 font-poppins">
      <div className="absolute top-[27px] left-[154px] text-17xl font-semibold text-salmon-100">
        Login
      </div>
      <img
        className="absolute top-[102.5px] left-[0.5px] max-h-full w-[405.5px]"
        alt=""
        src="/vector-23.svg"
      />
      <a href="/login1" className="absolute top-[27px] left-[524px] text-17xl text-black" style={{ textDecoration: 'none' }}>
        Register
      </a>
      <img
        className="absolute top-[103.5px] left-[406px] max-h-full w-[405.5px]"
        alt=""
        src="/vector-22.svg"
      />
      <label htmlFor="username" className="absolute top-[136px] left-[59px]">
        Username or Email Address *
      </label>
      <input
        id="username"
        type="text"
        className="absolute top-[169px] left-[59px] w-[694px] h-[57px] rounded box-border overflow-hidden border-[1.5px] border-solid border-gray-100"
       
        value={email}
        onChange={handleUsernameChange}
        style={{ fontSize: '20px' }} // Increase font size here
      />
      <label htmlFor="password" className="absolute top-[269px] left-[59px]">
        Password *
      </label>
      <input
        id="password"
        type="password"
        className="absolute top-[302px] left-[59px] w-[694px] h-[57px] rounded box-border overflow-hidden border-[1.5px] border-solid border-gray-100"
       
        value={password}
        onChange={handlePasswordChange}
        style={{ fontSize: '20px' }} // Increase font size here
      />
      <div
        onClick={handleLogin}
        className="absolute top-[533px] left-[calc(50%_-_346px)] cursor-pointer rounded-md bg-salmon-100 flex flex-row items-center justify-center py-[13px] px-[315px] text-5xl text-white font-made-tommy"
      >
        <b className="relative">Login</b>
      </div>
      <div className="absolute top-[389px] left-[551px] text-salmon-100">
        Lost Your Password?
      </div>
      <div className="absolute top-[448px] left-[93px]">Keep me logged in</div>
      <div className="absolute top-[453px] left-[63px] rounded-10xs box-border w-5 h-5 overflow-hidden border-[1px] border-solid border-gray-100" />
    </div>
  );
};

export default LoginFormWrapper;
