import React, {useRef, useState , useEffect } from 'react';
import FrameComponent20 from "../components/FrameComponent20q";
import Sidebar from "../components/Sidebar";
import { useLocation } from 'react-router-dom'

const Dashboard1 = () => {
    const location = useLocation();
  const [shippeddate, setshippeddate] = useState("");
  const [onthewaydate, setonthewaydate] = useState("");
  const [delivereddate, setdelivereddate] = useState("");
  const [shipped, setshipped] = useState(false);
  const [ontheway, setontheway] = useState(false);
  const [delivered, setdelivered] = useState(false);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://ecommercebackend-32ve.onrender.com/updateorder/${location.state.orderid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({shippeddate,onthewaydate,delivereddate,shipped,ontheway,delivered}),
      });

      if (response.ok) {
        alert("Updated");
        navigate("/dashboard2");
      } else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

  return (
    <div className="w-full relative bg-gainsboro-200 h-[1200px] overflow-hidden text-left text-5xl text-darkslategray-400 font-roboto">
         <div className="flex lg:flex-row md:flex-row flex-col ">
      <Sidebar />
      <div className="flex flex-col">
      <FrameComponent20 dashboard="Edit Product" />
      <div className="flex flex-row justify-between">
      <div></div>
      <div className='rounded-4xl bg-white box-border  lg:w-[1100px] md:w-[500px] w-full  overflow-hidden text-xl text-black '>
      <form onSubmit={handleFormSubmit} className='m-5'>
    <div class="grid gap-6 mb-6 md:grid-cols-1  ">
        <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">Shipped</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={(e)=>{
    if(e.target.value=="yes"){
        setshipped(true)
    }
    else{
        setshipped(false)
    }
}}
>
  <option selected>Choose...</option>
  <option value="yes">yes</option>
  <option value="no">no</option>
</select>
        </div>
        <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">On the way</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={(e)=>{
    if(e.target.value=="yes"){
        setontheway(true)
    }
    else{
        setontheway(false)
    }
}}
>
  <option selected>Choose...</option>
  <option value="yes">yes</option>
  <option value="no">no</option>
</select>
        </div>  
        <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">Delivered</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={(e)=>{
if(e.target.value=="yes"){
    setdelivered(true)
}
else{
    setdelivered(false)
}
}}
>
  <option selected>Choose...</option>
  <option value="yes">yes</option>
  <option value="no">no</option>
</select>
        </div>  
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">shipped date</label>
            <input type="date" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={
                        (e) => {
                            setshippeddate(e.target.value);
                        }
                    }/>
        </div> 
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">on the way date</label>
            <input type="date" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={
                        (e) => {
                            setonthewaydate(e.target.value);
                        }
                    }/>
        </div> 
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">delivery date</label>
            <input type="date" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={
                        (e) => {
                            setdelivereddate(e.target.value);
                        }
                    }/>
        </div> 
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer" onClick={(e)=>{
         handleFormSubmit(e)
    }}>Update</button>
</form>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard1;