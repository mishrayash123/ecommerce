import React, { useState } from 'react';
import { useAuth } from "../AuthContext";
import { useNavigate } from 'react-router-dom';

const LoginFormWrapper = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const {login, setUser } = useAuth();
  const nav = useNavigate();

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
        "https://ecommercebackend-32ve.onrender.com/auth/login", 
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
        nav("/");
      } else { 
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="shadow-[0px_0px_33.8px_-4px_rgba(0,_0,_0,_0.25)] h-fit rounded-lg bg-white w-screen lg:w-2/4  overflow-hidden text-left text-xl flex flex-col  text-dimgray-800 font-poppins">
   <div className='flex '>
     <div className='flex flex-col  md:w-6/12 w-48  '>
      <div className=" md:text-17xl font-semibold text-salmon-100 flex items-center justify-center">
        Login
      </div>
      <img
        className=" "
        alt=""
        src="/vector-23.svg"
        />
        </div>

        <div className='flex flex-col md:w-6/12 w-96'>
      <a href="/login1" className="md:text-17xl text-black flex md:items-center md:justify-center" style={{ textDecoration: 'none' }}>
        Register
      </a>
      <img
        className=""
        alt=""
        src="/vector-22.svg"
        />
        </div>
        </div>

        <div className='p-1 md:p-4 flex flex-col justify-center items-center space-y-4'>
          <div className='flex flex-col space-y-2  w-3/4 '>
      <label htmlFor="username" className="">
        Username or Email Address *
      </label>
      <input
        id="username"
        type="text"
        className="  md:h-[57px] h-10 md:w-full rounded box-border overflow-hidden border-[1.5px] border-solid border-gray-100"
        
        value={email}
        onChange={handleUsernameChange}
        style={{ fontSize: '20px' }} // Increase font size here
        />
        </div>

        <div className='flex flex-col space-y-2 w-3/4'>

      <label htmlFor="password" className="">
        Password *
      </label>
      <input
        id="password"
        type="password"
        className=" md:h-[57px] h-10 md:w-full rounded box-border overflow-hidden border-[1.5px] border-solid border-gray-100"
        value={password}
        onChange={handlePasswordChange}
        style={{ fontSize: '20px' }} // Increase font size here
        />
        </div>
      <div
        onClick={handleLogin}
        className=" cursor-pointer rounded-md bg-salmon-100 px-1 w-48 py-2 md:w-3/4 flex flex-row items-center justify-center  text-5xl text-white font-made-tommy"
      >
        <b className="">Login</b>
      </div>
      <div className=" text-salmon-100">
        Lost Your Password?
      </div>
      <div className='flex  items-center space-x-2'>
      <div className=" rounded-10xs box-border w-5 h-5 overflow-hidden border-[1px] border-solid border-gray-100" />
      <div className="">Keep me logged in</div>
      </div>
        </div>
    </div>
  );
};

export default LoginFormWrapper;
