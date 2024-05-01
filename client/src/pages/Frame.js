import React, { useState } from 'react';

const Frame = () => {
  const [formData, setFormData] = useState({
    useCurrentLocation: false,
    firstName: '',
    lastName: '',
    houseNo: '',
    buildingName: '',
    streetName: '',
    landmark: '',
    postalCode: '',
    city: '',
    country: '',
    state: '',
    mobileNo: '',
    makeDefaultAddress: false
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    // If the field is a checkbox, use the checked value instead of value
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: fieldValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="w-full relative shadow-[0px_0px_5.4px_rgba(0,_0,_0,_0.25)] bg-white h-[1383px] overflow-hidden text-left text-21xl text-black font-roboto">
      <img
        className="absolute top-[119.5px] left-[calc(50%_-_612.5px)] max-h-full w-[1225px]"
        alt=""
        src="/vector-161.svg"
      />
      <div className="absolute top-[43px] left-[60px]">Add New Address</div>
      
      {/* Form */}
      <form onSubmit={handleSubmit} className="absolute top-[100px] left-[60px]">
        <label>
          Use My Current Location:
          <input type="checkbox" name="useCurrentLocation" checked={formData.useCurrentLocation} onChange={handleChange} />
        </label>
        <div className="flex justify-between">
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
        </div>
        <div className="flex justify-between">
          <label>
            House No.:
            <input type="text" name="houseNo" value={formData.houseNo} onChange={handleChange} />
          </label>
          <label>
            Building Name:
            <input type="text" name="buildingName" value={formData.buildingName} onChange={handleChange} />
          </label>
        </div>
        <div className="flex justify-between">
          <label>
            Street Name:
            <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} />
          </label>
          <label>
            Landmark:
            <input type="text" name="landmark" value={formData.landmark} onChange={handleChange} />
          </label>
        </div>
        <div className="flex justify-between">
          <label>
            Postal Code:
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
          </label>
          <label>
            City/District:
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
        </div>
        <div className="flex justify-between">
          <label>
            Country:
            <input type="text" name="country" value={formData.country} onChange={handleChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
          </label>
        </div>
        <label>
          Mobile No.:
          <input type="text" name="mobileNo" value={formData.mobileNo} onChange={handleChange} />
        </label>
        <label>
          Make this my default address:
          <input type="checkbox" name="makeDefaultAddress" checked={formData.makeDefaultAddress} onChange={handleChange} />
        </label>
        <hr />
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
};

export default Frame;
