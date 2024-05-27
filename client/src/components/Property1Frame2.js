
import { useState } from "react";

const Property1Frame2 = ({ details, description }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col items-start justify-start text-left text-xl text-dimgray-400 font-inter  p-4 ">
      <div className=" w-full max-w-3xl bg-white box-border flex flex-col items-start justify-center py-4 px-6 border border-solid border-darkgray-600">
        <div  onClick={() => setShowDescription(!showDescription)}  className="font-semibold mb-2 flex justify-between items-center w-full">
          <span>Product Description</span>
          <button 
           
            className="text-sm text-black bg-white focus:outline-none"
          >
            <div className={`transform transition-transform ${showDescription ? 'rotate-180' : ''}`}>
              ▼
            </div>
          </button>
        </div>
        {showDescription && (
          <p className="text-wrap w-full break-words overflow-y-auto max-h-60">
            {description}
          </p>
        )}
      </div>
      <div  onClick={() => setShowDetails(!showDetails)}  className="w-full max-w-3xl bg-white box-border flex flex-col items-start justify-center py-4 px-6 border border-solid border-darkgray-600">
        <div  className="font-semibold mb-2 flex justify-between items-center w-full">
          <span>Product Details</span>
          <button 
            
            className="text-sm text-black bg-white focus:outline-none"
          >
            <div className={`transform transition-transform ${showDetails ? 'rotate-180' : ''}`}>
              ▼
            </div>
          </button>
        </div>
        {showDetails && (
          <p className="text-wrap w-full break-words overflow-y-auto max-h-60">
            {details}
          </p>
        )}
      </div>
    </div>
  );
};

export default Property1Frame2;
