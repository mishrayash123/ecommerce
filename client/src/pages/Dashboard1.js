import React, {useRef, useState , useEffect } from 'react';
import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent16 from "../components/FrameComponent16q";
import Property1Default from "../components/Property1Defaultq";
import DescriptionEditor from "../components/DescriptionEditor";
import ProductDetailsEditor from "../components/ProductDetailsEditor"; // Import the ProductDetailsEditor component
import {storage} from "../firebase.config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"

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
    console.log(userid,title,color,gender,size,price,description,details,category,subcategory,subcategory1,image1,image2,image3,image4)
    try {
      const response = await fetch("http://localhost:8080/addtoproducts", {
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
    <div className="w-full relative bg-gainsboro-200 h-[2271px] overflow-hidden text-left text-5xl text-darkslategray-400 font-roboto">
      <FrameComponent20 dashboard="Insert Product" />
      <FrameComponent16 />
      <img
        className="absolute top-[213px] left-[558px] rounded-12xs w-[11.5px] h-4 object-contain"
        alt=""
        src="/vector-28q.svg"
      />
      <div className="absolute top-[206px] left-[583.5px] font-medium">
        Add Product
      </div>
      <div className="absolute top-[253px] left-[544px] rounded-4xl bg-white box-border w-[1099px] h-[1826px] overflow-hidden text-xl text-black border-[1px] border-solid border-lightgray">
        <div className="absolute top-[42px] left-[50px] flex items-center">
          <label htmlFor="productTitle" className="text-black text-xl font-bold mr-8">Product Tittle</label>
          <input type="text" id="productTitle" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Product Tittle" 
          onChange={(e) => settitle(e.target.value)}
          value={title}
          />
        </div>
        <div className="absolute top-[110px] left-[50px]">
          <label htmlFor="productCategory" className="text-black text-xl font-bold mr-20">Product Category</label>
          <input type="text" id="productCategory" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Enter Product Category" 
          onChange={(e) => setcategory(e.target.value)}
          value={category}
          />
        </div>
        <div className="absolute top-[770px] left-[50px]">
          <label htmlFor="productCategory" className="text-black text-xl font-bold mr-20">Product Gender</label>
          <input type="text" id="productCategory" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Enter Product Gender" 
          onChange={(e) => setgender(e.target.value)}
          value={gender}
          />
        </div>
        <div className="absolute top-[180px] left-[50px] flex items-center">
          <label htmlFor="productImage" className="text-black text-xl font-bold mr-14">Product Image 1</label>
          <input type="file"  onChange={(e)=>{
          uploadimage1(e.target.files[0])
          }}/>
        </div>
        <div className="absolute top-[230px] left-[50px] flex items-center">
          <label htmlFor="productImage" className="text-black text-xl font-bold mr-14">Product Image 2</label>
          <input type="file"  onChange={(e)=>{
            handleupload(e.target.files[0])
          }}/>
         
        </div>
        <div className="absolute top-[280px] left-[50px] flex items-center">
          <label htmlFor="productImage" className="text-black text-xl font-bold mr-14">Product Image 3</label>
          <input type="file"  onChange={(e)=>{
            uploadimage3(e.target.files[0])
          }} />
          
        </div>
        <div className="absolute top-[330px] left-[50px] flex items-center">
          <label htmlFor="productImage" className="text-black text-xl font-bold mr-14">Product Image 4</label>
          <input type="file"  onChange={(e)=>{
            upload(e.target.files[0])
          }}/>
        </div>
        <div className="absolute top-[420px] left-[50px]">
          <label htmlFor="productPrice" className="text-black text-xl font-bold mr-8">Product Price</label>
          <input type="Number" id="productPrice" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Enter Product Price"  onChange={(e) => setprice(e.target.value)}
          value={price}/>
        </div>
        <div className="absolute top-[500px] left-[50px]">
          <label htmlFor="availableSize" className="text-black text-xl font-bold mr-14">Choose Available Size</label>
          <select id="availableSize" className="border border-solid border-darkgray-300 px-3 py-2 rounded text-xl">
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
        <div className="absolute top-[700px] left-[50px]">
  <label className="text-black text-xl font-bold mr-14 mb-8">Product Description</label>
  {/* <DescriptionEditor  onChange={(e) => setdescription(e.target.value)}
          value={description}/> */}
          <input type="text" id="productTitle" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Product Description" 
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          />
</div>
 <div className="absolute top-[1200px] left-[50px]">
          <label htmlFor="productDetails" className="text-black text-xl font-bold mr-14 mb-8">Product Details</label>
          {/* <ProductDetailsEditor  onChange={(e) => {setdetails(e.target.value)
          console.log("kjkjk")}
        }
          value={details}/> */}
          <input type="text" id="productTitle" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Product Details" 
          onChange={(e) => setdetails(e.target.value)}
          value={details}
          />
        </div>
        <div className="absolute bottom-[50px] left-[500px]">
          <button onClick={handleInsertProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded cursor-pointer">
            Insert Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
