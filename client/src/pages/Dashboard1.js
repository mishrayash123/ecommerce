import React, {useRef, useState , useEffect } from 'react';
import FrameComponent20 from "../components/FrameComponent20q";
import {storage} from "../firebase.config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import Sidebar from "../components/Sidebar";

const Dashboard1 = () => {
  const userid = localStorage.getItem("paricollectionuserId");
  const [title, settitle] = useState("");
  const [color, setcolor] = useState("red");
  const [gender, setgender] = useState("");
  const [size, setsize] = useState("x");
  const [price, setprice] = useState(0);
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const [image4, setimage4] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("xx");
  const [subcategory1, setsubcategory1] = useState("xx");
  const [details, setdetails] = useState("");

  const uploadimage1 = async(e) =>{
   
    const id=Math.random().toString();
    const imageRef1 = ref(storage,id);
    if (e) {
        uploadBytes(imageRef1, e).then(() => {
            getDownloadURL(imageRef1).then((url) => {
                setimage1(url);
                alert("uploaded")
            }).catch((error) => {
                console.log(error.message, "error geting the image url");
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
  }

  const handleupload = async(e) =>{
    
    const id=Math.random().toString();
    const imageRef2 = ref(storage,id);
    if (e) {
        uploadBytes(imageRef2, e).then(() => {
            getDownloadURL(imageRef2).then((url) => {
                setimage2(url);
                alert("uploaded")
            }).catch((error) => {
                console.log(error.message, "error geting the image url");
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
  }

  const uploadimage3 = async(e) =>{

    const id=Math.random().toString();
    const imageRef3 = ref(storage,id);
    if (e) {
        uploadBytes(imageRef3, e).then(() => {
            getDownloadURL(imageRef3).then((url) => {
                setimage3(url);
                alert("uploaded")
            }).catch((error) => {
                console.log(error.message, "error geting the image url");
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
  }

  const upload = async(e) =>{
    
    const id=Math.random().toString();
    const imageRef4 = ref(storage,id);
    if (e) {
        uploadBytes(imageRef4, e).then(() => {
            getDownloadURL(imageRef4).then((url) => {
                setimage4(url);
                alert("uploaded")
            }).catch((error) => {
                console.log(error.message, "error geting the image url");
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
  }

  const handleInsertProduct = async() => {
    try {
      const response = await fetch("https://ecommercebackend-32ve.onrender.com/addtoproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userid,title,color,gender,size,price,description,details,category,subcategory,subcategory1,image1,image2,image3,image4
        }),
      });

      if (response.ok) {
        alert("Added");
      }else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="w-full relative bg-gainsboro-200 h-[1200px] overflow-hidden text-left text-5xl text-darkslategray-400 font-roboto">
         <div className="flex lg:flex-row md:flex-row flex-col ">
      <Sidebar />
      <div className="flex flex-col">
      <FrameComponent20 dashboard="Insert Product" />
      <div className="flex flex-row justify-between">
      <div></div>
      <div className='rounded-4xl bg-white box-border  lg:w-[1100px] md:w-[500px] w-full  overflow-hidden text-xl text-black '>
      <form onSubmit={ handleInsertProduct} className='m-5'>
    <div class="grid gap-6 mb-6 md:grid-cols-1  ">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">Product Tittle</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={
                        (e) => {
                            settitle(e.target.value);
                        }
                    }/>
        </div>
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2"> Details</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={
                        (e) => {
                            setdetails(e.target.value);
                        }
                    }/>
        </div>  
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">Description</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={
                        (e) => {
                            setdescription(e.target.value);
                        }
                    }/>
        </div>  
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">Price</label>
            <input type="Number" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required onChange={
                        (e) => {
                            setprice(e.target.value);
                        }
                    }/>
        </div> 
        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">Gender</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={(e)=>{
    setgender(e.target.value)
}}
>
  <option selected>Choose...</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>
        </div>

        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">Size</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={(e)=>{
    setsize(e.target.value)
}}
>
  <option selected>Choose...</option>
  <option value="XXS">XXS</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
</select>
        </div>

        <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start ml-2">Category</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
onChange={(e)=>{
    setcategory(e.target.value)
}}
>
  <option selected>Choose...</option>
  <option value="AccessoriesArmSleeves">AccessoriesArmSleeves</option>
            <option value="Top seller">Top seller</option>
            <option value="AccessoriesHanky">AccessoriesHanky</option>
            <option value="AccessoriesSocks">AccessoriesSocks</option>
            <option value="ReadymadeKIDS">ReadymadeKIDS</option>
            <option value="ReadymadeLower">ReadymadeLower</option>
            <option value="ReadymadeTshirtMEN">ReadymadeTshirtMEN</option>
            <option value="ReadymadeTshirtWOMEN">ReadymadeTshirtWOMEN</option>
            <option value="ThermalMEN">ThermalMEN</option>
            <option value="ThermalWOMEN">ThermalWOMEN</option>
            <option value="UndergarmentsMenWomen">UndergarmentsMenWomen</option>
            <option value="UndergarmentsMenWomen">UndergarmentsMenWomen</option>
</select>
        </div>
      
    </div>
    <div className="m-3 ">
    <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image 1</label>
            <input type="file"
                onChange={
                    (e) => {
                        if (e.target.files[0]) {
                          uploadimage1(e.target.files[0])
                        }
                    }
                }/>
        </div>
        <div className="m-3 ">
    <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image 2</label>
            <input type="file"
                onChange={
                    (e) => {
                        if (e.target.files[0]) {
                            handleupload(e.target.files[0])
                        }
                    }
                }/>
        </div>
        <div className="m-3 ">
    <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image 3</label>
            <input type="file"
                onChange={
                    (e) => {
                        if (e.target.files[0]) {
                            uploadimage3(e.target.files[0])
                        }
                    }
                }/>
        </div>
    
    <div className="m-3 ">
    <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">image 4</label>
            <input type="file"
                onChange={
                    (e) => {
                        if (e.target.files[0]) {
                            upload(e.target.files[0])
                        }
                    }
                }/>
        </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer" onClick={(e)=>{
         handleInsertProduct(e)
    }}>Add</button>
</form>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard1;
