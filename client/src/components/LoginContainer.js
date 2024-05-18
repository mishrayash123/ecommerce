import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'


const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


  const handleRegister = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ecommercebackend-32ve.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password
        }),
      });

      if (response.ok) {
        alert("Registered successfully and now you can login your id");
        navigate("/login");
      }else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className=" shadow-[0px_0px_33.8px_-4px_rgba(0,_0,_0,_0.25)] w-screen lg:w-2/4 rounded-lgi bg-white h-full  overflow-hidden text-left  text-dimgray-800 font-poppins">
     <div className='flex'>
      <div className='flex flex-col md:w-6/12 w-48'>
      <div className=" text-black flex items-center justify-center sm:text-17xl" >
        <a href="/login" style={{ textDecoration: 'none' }} >Login</a>
      </div>
      <img
        className=" "
        alt=""
        src="/vector-231.svg"
        />
        </div>

<div className='flex flex-col md:w-6/12 w-96'>
      <div className=" font-semibold text-salmon-100 sm:text-17xl flex md:items-center md:justify-center">
        Register
      </div>
      <img
        className="  "
        alt=""
        src="/vector-22.svg"
        />
        </div>
        </div>

     <div className='p-1 md:p-4 flex flex-col justify-center items-center space-y-4'>
    <div className='flex  flex-col space-y-2 w-3/4'>
      <div className=" text-xl">
        Email Address *
      </div>
      {/* Username Input Field */}
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className=" rounded box-border  md:h-[57px] h-10 md:w-full  overflow-hidden border-[1.5px] border-solid border-gray-100"
        style={{ fontSize: '20px' }} // Increased font size here
        />
        </div>

        <div className='flex flex-col space-y-2 w-3/4'>
      <div className=" text-xl">Password *</div>
      {/* Password Input Field */}
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className=" rounded box-border  h-[57px] overflow-hidden border-[1.5px] border-solid border-gray-100"
        style={{ fontSize: '20px' }} // Increased font size here
        />
        </div>
      <div className=" text-base inline-block w-3/4  text-dimgray-200">
        <span>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our&nbsp;
        </span>
        <span className="text-salmon-100">privacy policy</span>
        <span>.</span>
      </div>
      <div className=" rounded-md bg-salmon-100 px-1 w-48 py-2 md:w-3/4 flex flex-row items-center justify-center  text-5xl text-white font-made-tommy cursor-pointer"
      onClick={handleRegister}
      >
        <b className="relative">Register</b>
      </div>
    </div>
        </div>
  );
};

export default LoginContainer;
