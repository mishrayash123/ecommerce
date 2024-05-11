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
    <div className="absolute top-[88px] left-[0px] box-border w-[957px] h-[846px] overflow-hidden text-left text-xl text-royalblue-100 font-made-tommy ">
      <table className="w-full border-collapse border border-black">
        <thead>
          <tr className="text-salmon border border-black">
            <th className="px-4 py-2 border border-black">Product Category</th>
            <th className="px-4 py-2 border border-black">Product Name</th>
            <th className="px-4 py-2 border border-black">EDIT PRODUCT</th>
            <th className="px-4 py-2 border border-black">DELETE PRODUCT</th>
          </tr>
        </thead>
        <tbody>
        {
          products.map(products =>(
          <tr className="border border-black">
            <td className="px-4 py-2 border border-black">{products.category}</td>
            <td className="px-4 py-2 border border-black">{products.title}</td>
            <td className="px-4 py-2 border border-black">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="w-6 h-6"
                  alt=""
                  src="/icbaselineeditq.svg"
                />
                <div>Edit</div>
              </div>
            </td>
            <td className="px-4 py-2 border border-black">
              <div className="flex flex-row items-center justify-center gap-[10px]">
                <img
                  className="w-6 h-6"
                  alt=""
                  src="/mdideleteq.svg"
                />
                <div className="cursor-pointer" onClick={(e) => remove(products._id)}>Delete</div>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FrameComponent14;
