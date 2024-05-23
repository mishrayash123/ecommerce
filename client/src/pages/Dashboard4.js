import FrameComponent20 from "../components/FrameComponent20q";
import Sidebar from "../components/Sidebar";
import {useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from "react";

const Dashboard4 = () => {
  const [orderdata,setorderdata] = useState([])
  const nav = useNavigate();

  const fetchData = async () => {
    try {
  const response = await fetch(
    "https://ecommercebackend-32ve.onrender.com/getorders",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const data = await response.json();
    setorderdata(data)
  } else {
    alert("Something went wrong please login again");
  }
} catch (error) {
  console.error("Error during login:", error);
}
  }

  useEffect(() => {
    fetchData()
  }, []);

  const remove = async (id) => {
    try {
    const response = await fetch(
      `https://ecommercebackend-32ve.onrender.com/deleteorders/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      alert("Removed");
      fetchData()
    } else {
      alert("something went wrong");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}


  return (
    <div className="w-full relative bg-gainsboro-200  overflow-hidden">
      <div className="flex lg:flex-row md:flex-row flex-col ">
      <Sidebar />
      <div className="flex flex-col">
      <FrameComponent20 dashboard="Orders" />
      <div className="flex flex-row justify-between">
      <div></div>
      <div className=" rounded-4xl bg-white box-border overflow-hidden border-[1px] border-solid border-lightgray">
      <div className=" box-border lg:w-[957px] md:w-[500px]  overflow-hidden text-left text-xl text-royalblue-100 font-made-tommy ">
      

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" class="px-6 py-3">
                          Order Date
                      </th>
                      <th scope="col" class="px-6 py-3">
                      Order
                      </th>
                      <th scope="col" class="px-6 py-3">
                          Delete
                      </th>
                      <th scope="col" class="px-6 py-3">
                          View
                      </th>
                  </tr>
              </thead>
              <tbody>
              {
                orderdata.sort(function(a,b){
                  return new Date(b.date) - new Date(a.date);
                }).map(products =>(
                  <tr>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {products.date}
                      </th>
                      <td class="px-6 py-4">
                      {products.ordered ?"Succesfull" :"Unsuccesfull"}
                      </td>
                      <td class="px-6 py-4">
                             <div className='cursor-pointer text-blue-600' onClick={(e) => remove(products._id)} >Delete</div>
                      </td>
                      <td class="px-6 py-4">
                            <div className='cursor-pointer text-blue-600' onClick={(e) => {
                              nav('/vieworder', { state: { id: products.productid,orderid:products.orderid} })
                              }} >View</div>
                      </td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
          </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard4;
