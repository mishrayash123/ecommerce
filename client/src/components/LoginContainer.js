import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'


const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


  const handleRegister = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
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
    <div className="absolute top-[calc(50%_-_601px)] left-[calc(50%_-_56px)] shadow-[0px_0px_33.8px_-4px_rgba(0,_0,_0,_0.25)] rounded-lgi bg-white w-[812px] h-[655px] overflow-hidden text-left text-17xl text-dimgray-800 font-poppins">
      <div className="absolute top-[27px] left-[154px] text-black" >
        <a href="/login" style={{ textDecoration: 'none' }} >Login</a>
      </div>
      <img
        className="absolute top-[102.5px] right-[-0.5px] max-h-full w-[405.5px]"
        alt=""
        src="/vector-231.svg"
      />
      <div className="absolute top-[27px] left-[524px] font-semibold text-salmon-100">
        Register
      </div>
      <img
        className="absolute top-[103.5px] left-[0px] max-h-full w-[405.5px]"
        alt=""
        src="/vector-22.svg"
      />
      <div className="absolute top-[140px] left-[59px] text-xl">
        Email Address *
      </div>
      {/* Username Input Field */}
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="absolute top-[184px] left-[59px] rounded box-border w-[694px] h-[57px] overflow-hidden border-[1.5px] border-solid border-gray-100"
        style={{ fontSize: '20px' }} // Increased font size here
      />
      <div className="absolute top-[279px] left-[59px] text-xl">Password *</div>
      {/* Password Input Field */}
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="absolute top-[318px] left-[59px] rounded box-border w-[694px] h-[57px] overflow-hidden border-[1.5px] border-solid border-gray-100"
        style={{ fontSize: '20px' }} // Increased font size here
      />
      <div className="absolute top-[413px] left-[59px] text-base inline-block w-[694px] text-dimgray-200">
        <span>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our&nbsp;
        </span>
        <span className="text-salmon-100">privacy policy</span>
        <span>.</span>
      </div>
      <div className="absolute top-[533px] left-[calc(50%_-_346px)] rounded-md bg-salmon-100 flex flex-row items-center justify-center py-[13px] px-[299px] text-5xl text-white font-made-tommy cursor-pointer"
      onClick={handleRegister}
      >
        <b className="relative">Register</b>
      </div>
    </div>
  );
};

export default LoginContainer;
