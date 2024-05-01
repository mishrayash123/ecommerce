import React, { useState } from 'react';

const Frame = () => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setzip] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [houseno, sethouseno] = useState('');
  const [street, setstreet] = useState('');
  const [landmark, setlandmark] = useState('');
  const [country, setcountry] = useState('');

  
  const handleFormSubmit = async (e) => {
    const id = localStorage.getItem("paricollectionuserId");
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:8080/updateusers/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({fname,landmark,lname,city,country,street,houseno,state,phone,zip}),
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
    <div className="w-full relative shadow-[0px_0px_5.4px_rgba(0,_0,_0,_0.25)] bg-white h-[1383px] overflow-hidden text-left text-21xl text-black font-roboto">
      <img
        className="absolute top-[119.5px] left-[calc(50%_-_612.5px)] max-h-full w-[1225px]"
        alt=""
        src="/vector-161.svg"
      />
      <div className="absolute top-[43px] left-[60px]">Add New Address</div>
      
      {/* Form */}
      <form onSubmit={handleFormSubmit} className="absolute top-[100px] left-[60px]">
        <label>
          Use My Current Location:
          <input type="checkbox" name="useCurrentLocation"  />
        </label>
        <div className="flex justify-between">
          <label>
            First Name:
            <input type="text" name="firstName" value={fname}
          onChange={(e) => setfname(e.target.value)} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName"  value={lname}
          onChange={(e) => setlname(e.target.value)}/>
          </label>
        </div>
        <div className="flex justify-between">
          <label>
            House No.:
            <input type="text" name="houseNo"  value={houseno}
          onChange={(e) => sethouseno(e.target.value)}/>
          </label>
        </div>
        <div className="flex justify-between">
          <label>
            Street Name:
            <input type="text" name="streetName" value={street}
          onChange={(e) => setstreet(e.target.value)}/>
          </label>
          <label>
            Landmark:
            <input type="text" name="landmark"  value={landmark}
          onChange={(e) => setlandmark(e.target.value)}/>
          </label>
        </div>
        <div className="flex justify-between">
          <label>
            Postal Code:
            <input type="text" name="postalCode"  value={zip}
          onChange={(e) => setzip(e.target.value)}/>
          </label>
          <label>
            City/District:
            <input type="text" name="city"  value={city}
          onChange={(e) => setcity(e.target.value)}/>
          </label>
        </div>
        <div className="flex justify-between">
          <label>
            Country:
            <input type="text" name="country"  value={country}
          onChange={(e) => setcountry(e.target.value)}/>
          </label>
          <label>
            State:
            <input type="text" name="state" value={state}
          onChange={(e) => setstate(e.target.value)}/>
          </label>
        </div>
        <label>
          Mobile No.:
          <input type="text" name="mobileNo"  value={phone}
          onChange={(e) => setPhone(e.target.value)}/>
        </label>
        <label>
          Make this my default address:
          <input type="checkbox" name="makeDefaultAddress"  />
        </label>
        <hr />
        <button type="submit" className="cursor-pointer" onClick={handleFormSubmit}>Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default Frame;
