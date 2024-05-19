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
        const response = await fetch(`https://ecommercebackend-32ve.onrender.com/updateusers/${id}`, {
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
    <>
    <div className='flex flex-col '>
    <p>Edit Profile</p>
    <div className=" p-2 md:p-0  bg-white box-border lg:w-full   text-left text-base text-dimgray-500 font-made-tommy border-[1px] border-solid border-silver-300">
      {/* Email ID */}

      <div className=''>
      <p className='lg:ml-12'>
          Email ID
        </p>
      <div className=" rounded-lg lg:ml-12 bg-whitesmoke-200 box-border md:w-96 w-56 px-1 py-2   text-sm font-inter border-[1px] border-solid border-silver-300">
        <label htmlFor="email" className="block text-lg text-darkgray-500"></label>
        <input
          type="text"
          id="email"
          className=" h-full  bg-transparent outline-none text-sm font-inter pl-2"
          placeholder={email1}
          style={{ fontSize: '14px' }}
          value={email}
          onChange={(e) => setemail(e.target.value)}
          />
      </div>
      <img
        className=" w-full"
        alt=""
        src="/vector-60q.svg"
        />
          </div>
      
      {/* General Information */}
      <div className='flex xl:items-center xl:justify-center'>
      <div className='flex flex-col space-y-2 '>
      <div className=" lg:text-xl text-dimgray-100 lg:ml-30 md:80">
        General Information
      </div>
      <img
        className=" max-h-full w-full  "
        alt=""
        src="/vector-61q.svg"
        />
      </div>
        </div>

      <div className='flex  justify-evenly flex-col md:flex-row' >
      {/* Left side inputs */}
      <div className="left-side space-y-4 mt-2">
        {/* First Name */}
        <div className=" md:text-lg text-darkgray-500">
          First Name *
        </div>
        <div className=" rounded-lg bg-white box-border md:w-72 w-56 h-[40px] overflow-hidden font-inter border-[1px] border-solid border-silver-300">
          <input
            type="text"
            className=" h-full bg-transparent outline-none text-sm font-inter pl-2"
            placeholder="first name"
            style={{ fontSize: '14px' }}
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            />
        </div>
        
        {/* Last Name */}
        <div className=" text-lg text-darkgray-500">
          Last Name *
        </div>
        <div className=" rounded-lg bg-white box-border md:w-72 w-56 h-[40px] overflow-hidden text-darkgray-200 font-inter border-[1px] border-solid border-silver-300">
          <input
            type="text"
            className=" h-full bg-transparent outline-none text-sm font-inter pl-2"
            placeholder="Last Name"
            style={{ fontSize: '14px' }}
            value={lname}
            onChange={(e) => setlname(e.target.value)}
            />
        </div>
        
        {/* Gender */}
        <div className=" text-lg text-darkgray-500">
          Gender *
        </div>
        <div className="">
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

      <img
        className="   sm:h-[343px] object-contain h-[5px] "
        alt=""
        src="/vector-62q.svg"
        />

      {/* Right side inputs */}
      <div className="right-side space-y-2 mt-2">
        {/* Date of Birth */}
        <div className=" text-lg text-darkgray-500">
          Date of Birth
        </div>
        <div className=" rounded-lg bg-white box-border md:w-72 w-56 h-[40px] overflow-hidden text-darkgray-200 font-inter border-[1px] border-solid border-silver-300">
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
        <div className=" text-lg text-darkgray-500">
          Mobile Number *
        </div>
        <div className=" rounded-lg bg-white box-border md:w-72 w-56 h-[40px] overflow-hidden text-darkgray-200 font-inter border-[1px] border-solid border-silver-300">
          <input
            type="text"
            className=" h-full bg-transparent outline-none text-sm font-inter pl-2"
            placeholder="Mobile Number"
            style={{ fontSize: '14px' }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        
        {/* Default Address */}
<div className=" text-lg text-darkgray-500">
  Default Address
</div>
<div className=" rounded-lg bg-white box-border md:w-72 w-56 h-[120px] overflow-hidden text-darkgray-200 font-inter border-[1px] border-solid border-silver-300">
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

      </div>

    

      {/* Images */}
  
    <div className='flex items-center justify-center'>
      <img
        className=" max-h-full w-full"
        alt=""
        src="/vector-61q.svg"
        />
        </div>
     

      {/* Save Button */}

      <div className=" rounded-md  bg-salmon  flex flex-row items-center justify-center py-[7px] px-11 text-5xl text-white" 
      >
        <button className=" cursor-pointer bg-[#FF6868] rounded-lg text-white px-5 py-2" onClick={handleFormSubmit}>SAVE</button>
      </div>

    </div>
        </div>
        </>
  );
};

export default FrameComponent6;
