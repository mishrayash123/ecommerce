import React from 'react';
import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent16 from "../components/FrameComponent16q";
import Property1Default from "../components/Property1Defaultq";
import DescriptionEditor from "../components/DescriptionEditor";
import ProductDetailsEditor from "../components/ProductDetailsEditor"; // Import the ProductDetailsEditor component

const Dashboard1 = () => {
  const handleInsertProduct = () => {
    // Handle the insertion of the product logic here
    console.log('Product inserted');
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
          <label htmlFor="productTitle" className="text-black text-xl font-bold mr-8">Product Title</label>
          <input type="text" id="productTitle" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Product Title" />
        </div>
        <div className="absolute top-[110px] left-[50px]">
          <label htmlFor="productCategory" className="text-black text-xl font-bold mr-20">Product Category</label>
          <input type="text" id="productCategory" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Enter Product Category" />
        </div>
        <div className="absolute top-[180px] left-[50px] flex items-center">
          <label htmlFor="productImage1" className="text-black text-xl font-bold mr-14">Product Image 1</label>
          <input type="file" id="productImage1" className="hidden" />
          <label htmlFor="productImage1" className="border border-solid border-darkgray-300 px-3 py-2 rounded cursor-pointer" style={{ width: '120px', height: '14px', color: 'grey' }}>Choose File</label>
          <span className="ml-4 text-l text-gray-500" id="noFileChosen1" >No file chosen</span>
        </div>
        <div className="absolute top-[230px] left-[50px] flex items-center">
          <label htmlFor="productImage2" className="text-black text-xl font-bold mr-14">Product Image 2</label>
          <input type="file" id="productImage2" className="hidden" />
          <label htmlFor="productImage2" className="border border-solid border-darkgray-300 px-3 py-2 rounded cursor-pointer" style={{ width: '120px', height: '14px', color: 'grey' }}>Choose File</label>
          <span className="ml-4 text-l text-gray-500" id="noFileChosen2" >No file chosen</span>
        </div>
        <div className="absolute top-[280px] left-[50px] flex items-center">
          <label htmlFor="productImage3" className="text-black text-xl font-bold mr-14">Product Image 3</label>
          <input type="file" id="productImage3" className="hidden" />
          <label htmlFor="productImage3" className="border border-solid border-darkgray-300 px-3 py-2 rounded cursor-pointer" style={{ width: '120px', height: '14px', color: 'grey' }}>Choose File</label>
          <span className="ml-4 text-l text-gray-500" id="noFileChosen3" >No file chosen</span>
        </div>
        <div className="absolute top-[330px] left-[50px] flex items-center">
          <label htmlFor="productImage4" className="text-black text-xl font-bold mr-14">Product Image 4</label>
          <input type="file" id="productImage4" className="hidden" />
          <label htmlFor="productImage4" className="border border-solid border-darkgray-300 px-3 py-2 rounded cursor-pointer" style={{ width: '120px', height: '14px', color: 'grey' }}>Choose File</label>
          <span className="ml-4 text-l text-gray-500" id="noFileChosen4" >No file chosen</span>
        </div>
        <div className="absolute top-[420px] left-[50px]">
          <label htmlFor="productPrice" className="text-black text-xl font-bold mr-8">Product Price</label>
          <input type="text" id="productPrice" className="border border-solid border-darkgray-300 px-3 py-2 rounded w-[300px] text-xl" placeholder="Enter Product Price" />
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
          <DescriptionEditor />
        </div>
        <div className="absolute top-[1200px] left-[50px]">
          <label htmlFor="productDetails" className="text-black text-xl font-bold mr-14 mb-8">Product Details</label>
          <ProductDetailsEditor />
        </div>
        <div className="absolute bottom-[50px] left-[500px]">
          <button onClick={handleInsertProduct} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded">
            Insert Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
