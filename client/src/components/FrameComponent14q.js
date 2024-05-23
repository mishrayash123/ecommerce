import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

const FrameComponent14 = () => {
  const [products, setproducts] = useState([]);
  const nav = useNavigate();


  

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://ecommercebackend-32ve.onrender.com/getproducts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setproducts(data)
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {
    
    fetchData();
  }, []);



  const remove = async (id) => {
    try {
    const response = await fetch(
      `https://ecommercebackend-32ve.onrender.com/deleteproducts/${id}`,
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
    <div className=" box-border lg:w-[957px] md:w-[500px]  overflow-hidden text-left text-xl text-royalblue-100 font-made-tommy ">
      

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                Product Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Delete
                </th>
            </tr>
        </thead>
        <tbody>
        {
          products.map(products =>(
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {products.title}
                </th>
                <td class="px-6 py-4">
                {products.category}
                </td>
                <td class="px-6 py-4">
                    <div className=" flex flex-row" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      <img
                  className="w-4 h-4"
                  alt=""
                  src="/mdideleteq.svg"
                /> <div className='cursor-pointer' onClick={(e) => remove(products._id)} >Delete</div></div>
                </td>
            </tr>
          ))}
        </tbody>
    </table>
</div>
    </div>
  );
};

export default FrameComponent14;
