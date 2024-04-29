import FrameComponent20 from "../components/FrameComponent20q";
import FrameComponent16 from "../components/FrameComponent16q";
import Property1Default from "../components/Property1Defaultq";

const Dashboard1 = () => {
  return (
    <div className="w-full relative bg-gainsboro-200 h-[2271px] overflow-hidden text-left text-5xl text-darkslategray-400 font-made-tommy">
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
        <div className="absolute top-[42px] left-[50px]">Product Tittle</div>
        <div className="absolute top-[122px] left-[50px]">Product</div>
        <div className="absolute top-[482px] left-[50px]">Product Price</div>
        <div className="absolute top-[562px] left-[50px]">
          Choose Available Size
        </div>
        <div className="absolute top-[822px] left-[50px]">
          Product Description
        </div>
        <div className="absolute top-[1232px] left-[50px]">Product Details</div>
        <div className="absolute top-[207px] left-[50px]">Product Image 1</div>
        <div className="absolute top-[267px] left-[50px]">Product Image 2</div>
        <div className="absolute top-[327px] left-[50px]">Product Image 3</div>
        <div className="absolute top-[387px] left-[50px]">Product Image 4</div>
        <div className="absolute top-[32px] left-[213px] rounded-md box-border w-[348px] h-[45px] flex flex-row items-center justify-center p-2.5 text-darkgray-700 border-[1px] border-solid border-darkgray-300">
          <div className="w-[124px] absolute !m-[0] top-[10px] left-[20px] inline-block z-[0]">
            Product Tittle
          </div>
        </div>
        <div className="absolute top-[112px] left-[213px] rounded-md box-border w-[348px] h-[45px] flex flex-row items-center justify-center p-2.5 text-darkgray-700 border-[1px] border-solid border-darkgray-300">
          <div className="w-[164px] absolute !m-[0] top-[10px] left-[20px] inline-block z-[0]">
            Product Category
          </div>
        </div>
        <div className="absolute top-[472px] left-[213px] rounded-md box-border w-[348px] h-[45px] flex flex-row items-center justify-center p-2.5 text-darkgray-700 border-[1px] border-solid border-darkgray-300">
          <div className="w-[124px] absolute !m-[0] top-[10px] left-[20px] inline-block z-[0]">
            Product Price
          </div>
        </div>
        <div className="absolute top-[207px] left-[223px] rounded-md bg-whitesmoke-500 box-border w-[105px] h-[26px] flex flex-row items-center justify-center p-2.5 text-base text-dimgray-200 border-[1px] border-solid border-darkgray-300">
          <div className="w-[86px] absolute !m-[0] top-[2px] left-[10px] inline-block z-[0]">
            Choose File
          </div>
        </div>
        <div className="absolute top-[267px] left-[223px] rounded-md bg-whitesmoke-500 box-border w-[105px] h-[26px] flex flex-row items-center justify-center p-2.5 text-base text-dimgray-200 border-[1px] border-solid border-darkgray-300">
          <div className="w-[86px] absolute !m-[0] top-[2px] left-[10px] inline-block z-[0]">
            Choose File
          </div>
        </div>
        <div className="absolute top-[327px] left-[223px] rounded-md bg-whitesmoke-500 box-border w-[105px] h-[26px] flex flex-row items-center justify-center p-2.5 text-base text-dimgray-200 border-[1px] border-solid border-darkgray-300">
          <div className="w-[86px] absolute !m-[0] top-[2px] left-[10px] inline-block z-[0]">
            Choose File
          </div>
        </div>
        <div className="absolute top-[387px] left-[223px] rounded-md bg-whitesmoke-500 box-border w-[105px] h-[26px] flex flex-row items-center justify-center p-2.5 text-base text-dimgray-200 border-[1px] border-solid border-darkgray-300">
          <div className="w-[86px] absolute !m-[0] top-[2px] left-[10px] inline-block z-[0]">
            Choose File
          </div>
        </div>
        <div className="absolute top-[212px] left-[336px] text-sm text-dimgray-200">
          No file choosen
        </div>
        <div className="absolute top-[272px] left-[336px] text-sm text-dimgray-200">
          No file choosen
        </div>
        <div className="absolute top-[332px] left-[336px] text-sm text-dimgray-200">
          No file choosen
        </div>
        <div className="absolute top-[392px] left-[336px] text-sm text-dimgray-200">
          No file choosen
        </div>
        <Property1Default
          selectSortingOption="T-Shirt"
          prop="Inner"
          prop1="Thermal"
          prop2="Socks"
          prop3="Lowers"
          showListBoxTitle={false}
          property1DefaultPosition="absolute"
          property1DefaultTop="525px"
          property1DefaultLeft="276px"
        />
        <div className="absolute top-[650px] left-[290px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-lg text-dimgray-400 border-[2px] border-solid border-black">
          <div className="w-[33px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_16px)] inline-block z-[0]">
            XXS
          </div>
        </div>
        <div className="absolute top-[705px] left-[290px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-lg text-salmon border-[2px] border-solid border-salmon">
          <div className="w-2.5 absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_4px)] font-medium inline-block z-[0]">
            L
          </div>
        </div>
        <div className="absolute top-[650px] left-[380px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-lg text-salmon border-[2px] border-solid border-salmon">
          <div className="w-[23px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] font-medium inline-block z-[0]">
            XS
          </div>
        </div>
        <div className="absolute top-[705px] left-[380px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-lg text-salmon border-[2px] border-solid border-salmon">
          <div className="w-[21px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_10px)] font-medium inline-block z-[0]">
            XL
          </div>
        </div>
        <div className="absolute top-[650px] left-[470px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-lg text-salmon border-[2px] border-solid border-salmon">
          <div className="w-[11px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_5px)] font-medium inline-block z-[0]">
            S
          </div>
        </div>
        <div className="absolute top-[705px] left-[470px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-lg text-salmon border-[2px] border-solid border-salmon">
          <div className="w-[33px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_16px)] font-medium inline-block z-[0]">
            XXL
          </div>
        </div>
        <div className="absolute top-[650px] left-[560px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-lg text-salmon border-[2px] border-solid border-salmon">
          <div className="w-4 absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_8px)] font-medium inline-block z-[0]">
            M
          </div>
        </div>
        <div className="absolute top-[705px] left-[560px] rounded-6xs box-border w-[68px] h-[41px] flex flex-row items-center justify-center py-[7px] px-4 text-lg text-dimgray-400 border-[2px] border-solid border-black">
          <div className="w-[43px] absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_21px)] inline-block z-[0]">
            XXXL
          </div>
        </div>
        <img
          className="absolute top-[872px] left-[50px] rounded-10xs w-[893px] h-[301px] overflow-hidden"
          alt=""
          src="/frame-84q.svg"
        />
        <img
          className="absolute top-[1282px] left-[50px] rounded-10xs w-[893px] h-[301px] overflow-hidden"
          alt=""
          src="/frame-84q.svg"
        />
        <div className="absolute right-[156px] bottom-[100px] rounded-md bg-salmon flex flex-row items-center justify-center py-2.5 px-[127.5px] text-5xl text-white">
          <b className="relative">INSERT PRODUCT</b>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
