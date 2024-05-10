import React, { useState } from 'react'


const FrameComponent6 = () => {
  const email1 = localStorage.getItem("email");
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setgender] = useState('');
  const [defaultaddress, setdefaultaddress] = useState('');
  const [dob, setdob] = useState('');
  const [email, setemail] = useState('');

  
  const handleFormSubmit = async (e) => {
    const id = localStorage.getItem("paricollectionuserId");
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:8080/updateusers/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email,fname,lname,phone,gender,defaultaddress,dob}),
        });
  
        if (response.ok) {
          alert("Updated");
          navigate("/profile");
        }else {
          alert("something went wrong...please check credential");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
  }

  return (
    <div className="absolute top-[227px] left-[480px] bg-white box-border w-[962px] h-[699px] overflow-hidden text-left text-base text-dimgray-500 font-made-tommy border-[1px] border-solid border-silver-300">
      
      {/* Email ID */}

      <div className="absolute top-[61px] left-[45px] rounded-lg bg-whitesmoke-200 box-border w-[355px] h-[40px] overflow-hidden text-sm font-inter border-[1px] border-solid border-silver-300">
        <label htmlFor="email" className="block text-lg text-darkgray-500"></label>
        <input
          type="text"
          id="email"
          className="w-full h-full bg-transparent outline-none text-sm font-inter pl-2"
          placeholder={email1}
          style={{ fontSize: '14px' }}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      
      {/* General Information */}
      <div className="absolute top-[163px] left-[45px] text-xl text-dimgray-100">
        General Information
      </div>

      {/* Left side inputs */}
      <div className="left-side">
        {/* First Name */}
        <div className="absolute top-[217px] left-[45px] text-lg text-darkgray-500">
          First Name *
        </div>
        <div className="absolute top-[252px] left-[45px] rounded-lg bg-white box-border w-[355px] h-[40px] overflow-hidden font-inter border-[1px] border-solid border-silver-300">
          <input
            type="text"
            className="w-full h-full bg-transparent outline-none text-sm font-inter pl-2"
            placeholder="first name"
            style={{ fontSize: '14px' }}
            value={fname}
          onChange={(e) => setfname(e.target.value)}
          />
        </div>
        
        {/* Last Name */}
        <div className="absolute top-[315px] left-[45px] text-lg text-darkgray-500">
          Last Name *
        </div>
        <div className="absolute top-[350px] left-[45px] rounded-lg bg-white box-border w-[355px] h-[40px] overflow-hidden text-darkgray-200 font-inter border-[1px] border-solid border-silver-300">
          <input
            type="text"
            className="w-full h-full bg-transparent outline-none text-sm font-inter pl-2"
            placeholder="Last Name"
            style={{ fontSize: '14px' }}
            value={lname}
          onChange={(e) => setlname(e.target.value)}
          />
        </div>
        
        {/* Gender */}
        <div className="absolute top-[420px] left-[45px] text-lg text-darkgray-500">
          Gender *
        </div>
        <div className="absolute top-[450px] left-[45px]">
          <label htmlFor="male" className="inline-block mr-2">
            <input type="radio" id="male" name="gender" value="male" onChange={(e) => {
                                if(e.target.checked){
                                    setgender("male")
                                }
                                else{
                                    setgender("")
                                }
                            }}/>
            <span className="text-darkgray-700">Male</span>
          </label>
          <label htmlFor="female" className="inline-block mr-2">
            <input type="radio" id="female" name="gender" value="female" onChange={(e) => {
                                if(e.target.checked){
                                    setgender("female")
                                }
                                else{
                                    setgender("")
                                }
                            }}/>
            <span className="text-darkgray-700">Female</span>
          </label>
          <label htmlFor="other" className="inline-block">
            <input type="radio" id="other" name="gender" value="other" onChange={(e) => {
                                if(e.target.checked){
                                    setgender("other")
                                }
                                else{
                                    setgender("")
                                }
                            }}/>
            <span className="text-darkgray-700">Other</span>
          </label>
        </div>
      </div>

      {/* Right side inputs */}
      <div className="right-side">
        {/* Date of Birth */}
        <div className="absolute top-[217px] left-[562px] text-lg text-darkgray-500">
          Date of Birth
        </div>
        <div className="absolute top-[252px] left-[562px] rounded-lg bg-white box-border w-[350px] h-[40px] overflow-hidden text-darkgray-200 font-inter border-[1px] border-solid border-silver-300">
          <input
            type="date"
            className="w-full h-full bg-transparent outline-none text-sm font-inter pl-2"
            placeholder="Please Enter Your Birthday"
            style={{ fontSize: '14px' }}
            value={dob}
          onChange={(e) => setdob(e.target.value)}
          />
        </div>
        
        {/* Mobile Number */}
        <div className="absolute top-[317px] left-[562px] text-lg text-darkgray-500">
          Mobile Number *
        </div>
        <div className="absolute top-[352px] left-[562px] rounded-lg bg-white box-border w-[355px] h-[40px] overflow-hidden text-darkgray-200 font-inter border-[1px] border-solid border-silver-300">
          <input
            type="text"
            className="w-full h-full bg-transparent outline-none text-sm font-inter pl-2"
            placeholder="Mobile Number"
            style={{ fontSize: '14px' }}
            value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        
        {/* Default Address */}
<div className="absolute top-[420px] left-[562px] text-lg text-darkgray-500">
  Default Address
</div>
<div className="absolute top-[450px] left-[562px] rounded-lg bg-white box-border w-[350px] h-[120px] overflow-hidden text-darkgray-200 font-inter border-[1px] border-solid border-silver-300">
  <input
    type="text"
    rows="4" // This attribute may not be fully supported by all browsers for <input> tags
    className="w-full h-full bg-transparent outline-none text-sm font-inter pl-2"
    placeholder="Default Address"
    style={{ fontSize: '14px' }}
    value={defaultaddress}
          onChange={(e) => setdefaultaddress(e.target.value)}
  />

        </div>
      </div>

      {/* Images */}
      <img
        className="absolute top-[137.5px] left-[1.5px] max-h-full w-[960.5px]"
        alt=""
        src="/vector-60q.svg"
      />
      <img
        className="absolute top-[197.5px] left-[calc(50%_-_436px)] max-h-full w-[872px]"
        alt=""
        src="/vector-61q.svg"
      />
      <img
        className="absolute top-[597.5px] left-[calc(50%_-_436px)] max-h-full w-[872px]"
        alt=""
        src="/vector-61q.svg"
      />
      <img
        className="absolute top-[226.5px] left-[calc(50%_-_0px)] max-w-full overflow-hidden h-[343px] object-contain"
        alt=""
        src="/vector-62q.svg"
      />

      {/* Save Button */}
      <div className="absolute top-[626px] left-[calc(50%_-_75px)] rounded-md bg-salmon flex flex-row items-center justify-center py-[7px] px-11 text-5xl text-white" 
      
      >
        <button className="relative cursor-pointer" onClick={handleFormSubmit}>SAVE</button>
      </div>
    </div>
  );
};

export default FrameComponent6;
