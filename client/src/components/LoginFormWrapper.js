import React, { useState } from 'react';

const LoginFormWrapper = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Your login logic here
    console.log('Logging in...');
  };

  return (
    <div className="absolute top-[calc(50%_-_601px)] left-[calc(50%_-_56px)] shadow-[0px_0px_33.8px_-4px_rgba(0,_0,_0,_0.25)] rounded-lgi bg-white w-[812px] h-[656px] overflow-hidden text-left text-xl text-dimgray-800 font-poppins">
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
       
        value={username}
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
      <button
        onClick={handleLogin}
        className="absolute top-[533px] left-[calc(50%_-_346px)] rounded-md bg-salmon-100 flex flex-row items-center justify-center py-[13px] px-[315px] text-5xl text-white font-made-tommy"
      >
        <b className="relative">Login</b>
      </button>
      <div className="absolute top-[389px] left-[551px] text-salmon-100">
        Lost Your Password?
      </div>
      <div className="absolute top-[448px] left-[93px]">Keep me logged in</div>
      <div className="absolute top-[453px] left-[63px] rounded-10xs box-border w-5 h-5 overflow-hidden border-[1px] border-solid border-gray-100" />
    </div>
  );
};

export default LoginFormWrapper;
