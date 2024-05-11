import React, { useCallback, useState } from "react";
import MainHeader from "../components/MainHeader";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";

const ADDRESSPOPUP = () => {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setzip] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [houseno, sethouseno] = useState('');
  const [street, setstreet] = useState('');
  const [landmark, setlandmark] = useState('');
  const [country, setcountry] = useState('');

    const handleFormSubmit = async (e) => {
      const id = localStorage.getItem("paricollectionuserId");
      e.preventDefault();
      try {
          const response = await fetch(`https://ecommercebackend-32ve.onrender.com/updateusers/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({fname,landmark,lname,city,country,street,houseno,state,phone,zip}),
          });
  
          if (response.ok) {
            alert("Updated");
            navigate("/profile");
          }else {
            alert("something went wrong...please check credential");
          }
        } catch (error) {
          console.error("Error during registration:", error);
        }
    }



  return (
    <div>
                              <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg"  basilnotificationOutline="/basilnotificationoutline.svg" prop="2" />

    <div className=" bg-white w-3/4 overflow-hidden flex flex-col items-start justify-start pt-[43px] px-[18px] pb-[78px] gap-[45.5px] leading-[normal] tracking-[normal] mq750:gap-[23px] mt-20">
      <header className="w-[1225px] flex flex-col items-start justify-start gap-[29.5px] max-w-full text-left text-[40px] text-black font-roboto-flex">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[43px] pl-[42px] box-border max-w-full lg:pl-[21px] lg:pr-[21px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
            <h2 className="m-0 w-[330px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap max-w-full">
              Add New Address
            </h2>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <img
                className="w-[41px] h-[41px] relative overflow-hidden shrink-0 cursor-pointer"
                loading="lazy"
                alt=""
                src="/mdicancelbold.svg"
                // onClick={onMdicancelBoldIconClick}
              />
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/vector-16.svg"
        />
      </header>
      <main className="w-[1225px] flex flex-col items-end justify-start gap-[38px] max-w-full mq750:gap-[19px]">
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-[63px] pb-[11px] box-border max-w-full lg:pl-[31px] lg:pr-[31px] lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[49px] max-w-full mq750:gap-[24px]">
            <Button
              className="w-[528px] h-[57px] max-w-full"
              startIcon={
                <img
                  width="28px"
                  height="28px"
                  src="/location.png"
                />
              }
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#00c7f3",
                borderRadius: "17px",
                "&:hover": { background: "#00c7f3" },
                width: 528,
                height: 57,
              }}
            >
              Use my current location
            </Button>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[43px] max-w-full mq750:gap-[21px]">
              <TextField
                className="[border:none] bg-[transparent] h-[57px] flex-1 font-roboto-flex text-3xl text-darkgray min-w-[343px] max-w-full mq750:min-w-full"
                placeholder="First Name *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    height: "57px",
                    borderRadius: "6px",
                    fontSize: "22px",
                    color: "#000", // Change text color to black
                  },
                }}
                value={fname}
                onChange={(e) => setfname(e.target.value)}
              />
              <TextField
                className="[border:none] bg-[transparent] h-[57px] flex-1 font-roboto-flex text-3xl text-darkgray min-w-[343px] max-w-full mq750:min-w-full"
                placeholder="Last Name *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    height: "57px",
                    borderRadius: "6px",
                    fontSize: "22px",
                    color: "#000", // Change text color to black
                  },
                }}
                value={lname}
          onChange={(e) => setlname(e.target.value)}
              />
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-[63px] pb-[15px] box-border max-w-full lg:pl-[31px] lg:pr-[31px] lg:box-border">
          <TextField
            className="[border:none] bg-[transparent] h-[57px] flex-1 font-roboto-flex text-3xl text-darkgray max-w-full"
            placeholder="House No., Building Name *"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#a8a8a8" },
              "& .MuiInputBase-root": {
                height: "57px",
                borderRadius: "6px",
                fontSize: "22px",
                color: "#000", // Change text color to black
              },
            }}
            value={houseno}
          onChange={(e) => sethouseno(e.target.value)}
          />
        </div>
        <section className="self-stretch flex flex-row items-start justify-center pt-0 px-[63px] pb-[19px] box-border max-w-full text-left text-3xl text-black font-roboto-flex lg:pl-[31px] lg:pr-[31px] lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full mq750:gap-[21px]">
            <TextField
              className="[border:none] bg-[transparent] self-stretch h-[57px] font-roboto-flex text-3xl text-darkgray"
              placeholder="Street Name, Area *"
              variant="outlined"
              sx={{
                "& fieldset": { borderColor: "#a8a8a8" },
                "& .MuiInputBase-root": {
                  height: "57px",
                  borderRadius: "6px",
                  fontSize: "22px",
                  color: "#000", // Change text color to black
                },
              }}
              value={street}
          onChange={(e) => setstreet(e.target.value)}
            />
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
              <TextField
                className="[border:none] bg-[transparent] h-[57px] flex-1 font-roboto-flex text-3xl text-darkgray max-w-full"
                placeholder="Landmark"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    height: "57px",
                    borderRadius: "6px",
                    fontSize: "22px",
                    color: "#000", // Change text color to black
                  },
                }}
                value={landmark}
          onChange={(e) => setlandmark(e.target.value)}
              />
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center pt-0 px-0 pb-2.5 box-border gap-[43px] max-w-full mq750:gap-[21px]">
              <TextField
                className="[border:none] bg-[transparent] h-[57px] flex-1 font-roboto-flex text-3xl text-darkgray min-w-[343px] max-w-full mq750:min-w-full"
                placeholder="Postal Code *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    height: "57px",
                    borderRadius: "6px",
                    fontSize: "22px",
                    color: "#000", // Change text color to black
                  },
                }}
                value={zip}
          onChange={(e) => setzip(e.target.value)}
              />
              <TextField
                className="[border:none] bg-[transparent] h-[57px] flex-1 font-roboto-flex text-3xl text-darkgray min-w-[343px] max-w-full mq750:min-w-full"
                placeholder="City / District *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    height: "57px",
                    borderRadius: "6px",
                    fontSize: "22px",
                    color: "#000", // Change text color to black
                  },
                }}
                value={city}
          onChange={(e) => setcity(e.target.value)}
              />
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-center justify-center pt-0 px-0 pb-1.5 box-border gap-[43px] max-w-full mq750:gap-[21px]">
              <FormControl
                className="h-[57px] flex-1 font-roboto-flex text-3xl text-black min-w-[343px] max-w-full w-auto mq750:min-w-full"
                variant="standard"
                sx={{
                  borderColor: "#a8a8a8",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "6px",
                  width: "48.043676069153776%",
                  height: "57px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "57px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "57px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "57px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "57px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 22,
                    fontWeight: "Regular",
                    fontFamily: "MADE TOMMY",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "30px",
                  },
                }}
              >
                <InputLabel color="primary">Country</InputLabel>
                <Select
  color="primary"
  disableUnderline
  displayEmpty
  value={country}
          onChange={(e) => setcountry(e.target.value)}
  IconComponent={() => (
    <img
      width="12px"
      height="7px"
      src="/selection-icons.svg"
      style={{ marginRight: "46px" }}
    />
  )}
>
  <MenuItem value="">Select Country</MenuItem>
  <MenuItem value="India">India</MenuItem>
  <MenuItem value="United States">United States</MenuItem>
  <MenuItem value="Yemen">Yemen</MenuItem>
  {/* Add more countries as MenuItem */}
</Select>

                <FormHelperText />
              </FormControl>
              <FormControl
                className="h-[57px] flex-1 font-roboto-flex text-3xl text-black min-w-[343px] max-w-full w-auto mq750:min-w-full"
                variant="standard"
                sx={{
                  borderColor: "#a8a8a8",
                  borderStyle: "SOLID",
                  borderTopWidth: "1px",
                  borderRightWidth: "1px",
                  borderBottomWidth: "1px",
                  borderLeftWidth: "1px",
                  borderRadius: "6px",
                  width: "48.043676069153776%",
                  height: "57px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "57px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "57px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "57px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "57px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 22,
                    fontWeight: "Regular",
                    fontFamily: "MADE TOMMY",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "30px",
                  },
                }}
              >
                <InputLabel color="primary">State</InputLabel>
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  value={state}
          onChange={(e) => setstate(e.target.value)}
                  IconComponent={() => (
                    <img
                      width="12px"
                      height="7px"
                      src="/locatin.png"
                      style={{ marginRight: "46px" }}
                    />
                  )}
                >
                  <MenuItem value="">Select State</MenuItem>
                  <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                  <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                  <MenuItem value="Uttar Pradesh">Himachal Pradesh</MenuItem>
                  <MenuItem value="Uttar Pradesh">Andhra Pradesh</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[44px] max-w-full mq750:gap-[22px]">
              <div className="self-stretch h-[57px] rounded-md box-border flex flex-row items-start justify-start pt-4 px-[11px] pb-[13px] gap-[13px] border-[1px] border-solid border-darkgray">
                <div className="relative inline-block min-w-[36px] whitespace-nowrap mq450:text-lg">
                  <b>+91</b>
                </div>
                <div className="mt-[-16.199999999999818px] h-[57.5px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
                  <img
                    className="w-px flex-1 relative max-h-full"
                    alt=""
                    src="/vector-59.svg"
                  />
                </div>
                <input
                  className="w-[167px] [border:none] [outline:none] bg-[transparent] h-7 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-roboto-flex text-3xl text-darkgray"
                  placeholder="Phone Number *"
                  type="text"
                  style={{fontSize:"20px"}}
                  value={phone}
          onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex flex-row items-start justify-center py-0 px-0.5 box-border max-w-full text-darkslategray">
                {/* <div className="flex flex-row items-start justify-start gap-[15px] max-w-full">
                  <input className="m-0 h-[23px] w-5" type="checkbox" />
                  <div className="relative mq450:text-lg">
                    Make this my default address
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        <div className="w-[493px] flex flex-row items-start justify-center py-0 px-[79px] box-border max-w-full mq750:pl-[39px] mq750:pr-[39px] mq750:box-border">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[54px] max-w-full mq450:gap-[27px]">
            <Button
              className="h-[50px] flex-1 min-w-[101px] cursor-pointer"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#444",
                fontSize: "24",
                borderColor: "#000",
                borderRadius: "6px",
                "&:hover": { borderColor: "#000" },
                height: 50,
              }}
            >
              CANCEL
            </Button>
            <Button
              className="h-[50px] w-[125px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#ff6868",
                borderRadius: "6px",
                "&:hover": { background: "#ff6868" },
                width: 125,
                height: 50,
              }}
         onClick={handleFormSubmit}
            >
              SAVE
            </Button>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default ADDRESSPOPUP;
