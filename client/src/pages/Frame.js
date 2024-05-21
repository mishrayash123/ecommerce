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
        body: JSON.stringify({ fname, landmark, lname, city, country, street, houseno, state, phone, zip }),
      });

      if (response.ok) {
        alert("Updated");
        navigate("/profile");
      } else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }



  return (

    <>
      <div>
        {/************************* * here  is navbar **********************************/}

        {/* <MainHeader solarbagOutline="/solarbagoutline1.svg" ionsearch="/ionsearch.svg" basilnotificationOutline="/basilnotificationoutline.svg" prop="2" /> */}

        {/************************* * here  ends navbar **********************************/}

        <div className=" ">
          <header>
            <h1 className="ml-1 md:ml-7"> Add New Address</h1>
            <img
              className=" w-full"
              alt=""
              src="/vector-16.svg"
            />

          </header>


          <main className=" w-[95%] ml-1 md:ml-5">
            {/* map button starts */}
            <div className="   md:mt-2 lg:mt-5">
              <Button
                className=" lg:h-[50px]  lg:w-[500px] py-3 px-10 ml-10"
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
                  text: "14px",


                }}
              >
                Use my current location
              </Button>
            </div>

            {/* map button ends */}

            <div className="flex flex-col  justify-between  mt-3 md:flex-row gap-3">
              <TextField
                className="[border:none] bg-[transparent] w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full "
                placeholder="First Name *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {

                    borderRadius: "6px",

                    color: "#000",
                  },
                }}
                value={fname}
                onChange={(e) => setfname(e.target.value)}
              />
              <TextField
                className="[border:none] bg-[transparent]  w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full "
                placeholder="Last Name *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    borderRadius: "6px",
                    color: "#000",
                  },
                }}
                value={lname}
                onChange={(e) => setlname(e.target.value)}
              />
            </div>


            <div className="mt-3">
              <TextField
                className="[border:none] bg-[transparent]  w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full"
                placeholder="House No., Building Name *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    borderRadius: "6px",
                    color: "#000", // Change text color to black
                  },
                }}
                value={houseno}
                onChange={(e) => sethouseno(e.target.value)}
              />
            </div>



            <div className="mt-3">
              <TextField
                className="[border:none] bg-[transparent]  w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full"
                placeholder="Street Name, Area *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    borderRadius: "6px",
                    color: "#000", // Change text color to black
                  },
                }}
                value={street}
                onChange={(e) => setstreet(e.target.value)}
              />
            </div>



            <div className=" mt-3">
              <TextField
                className="[border:none] bg-[transparent]  w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full"
                placeholder="Landmark"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {

                    borderRadius: "6px",
                    color: "#000",
                  },
                }}
                value={landmark}
                onChange={(e) => setlandmark(e.target.value)}
              />
            </div>



            <div className="flex flex-col  justify-between  mt-3 md:flex-row gap-3">
              <TextField
                className="[border:none] bg-[transparent] w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full"
                placeholder="Postal Code *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {

                    borderRadius: "6px",

                    color: "#000",
                  },
                }}
                value={zip}
                onChange={(e) => setzip(e.target.value)}
              />
              <TextField
                className="[border:none] bg-[transparent] w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full"
                placeholder="City / District *"
                variant="outlined"
                sx={{
                  "& fieldset": { borderColor: "#a8a8a8" },
                  "& .MuiInputBase-root": {
                    borderRadius: "6px",
                    color: "#000", // Change text color to black
                  },
                }}
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
            </div>





            <div className=" flex md:flex-row mt-3 justify-between gap-3 flex-col">

              <FormControl
                className="[border:none]  bg-[transparent] w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full"
                variant="standard"
                sx={{
                  borderColor: "#a8a8a8",
                  borderStyle: "SOLID",
                  borderWidth: "1px",
                  borderRadius: "6px",
                  "& .MuiInputBase-root": {
                    justifyContent: "center",
                    display: "inline-flex",
                    marginLeft: "50px"
                  },
                  "& .MuiInputLabel-root": {
                    marginTop: "0px",


                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 20,
                    fontWeight: "Regular",
                    fontFamily: "MADE TOMMY",
                    paddingLeft: 2,


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
                className="[border:none]  bg-[transparent] w-full font-roboto-flex text-lg md:text-5xl text-darkgray max-w-full"
                variant="standard"
                sx={{
                  borderColor: "#a8a8a8",
                  borderStyle: "SOLID",
                  borderWidth: "1px",
                  borderRadius: "6px",
                  "& .MuiInputBase-root": {
                    justifyContent: "center",
                    display: "inline-flex",
                    marginLeft: "50px"
                  },
                  "& .MuiInputLabel-root": {
                    marginTop: "0px",


                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 20,
                    fontWeight: "Regular",
                    fontFamily: "MADE TOMMY",
                    paddingLeft: 2,


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




            <div className=" mt-3">
              <div className="rounded-md box-border flex flex-row p-4  justify-start border-[1px] border-solid focus:border-gray-700 border-gray-400">
                <b className="pr-2 ">+91</b>

                <input
                  className=" [border:none] [outline:none] bg-[transparent] font-roboto-flex text-xl text-darkgray"
                  placeholder="Phone Number *"
                  type="text"
                  style={{ fontSize: "16px" }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>


              <div className="flex flex-row items-start mt-3  mb-5 justify-start gap-[15px] max-w-full text-darkslategray">

                <input className=" h-[23px] shadow-sm shadow-dimgray-500  w-5" type="checkbox" />
                <div className="text-lg">
                  Make this my default address
                </div>
              </div>
            </div>

            <img
              className=" mb-3 w-full"
              alt=""
              src="/vector-16.svg"
            />


            <div className="flex flex-row  p-0 md:items-end  mb-6 gap-3 justify-center md:justify-end py-0 ">
             
                <Button
                  className="h-[50px] cursor-pointer"
                  disableElevation={true}
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#444",
                    fontSize: "24",
                    borderColor: "#000",
                    borderRadius: "6px",
                    "&:hover": { borderColor: "#000" },
                    width:125,
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
          </main>
        </div>
      </div>

    </>
  );
};

export default ADDRESSPOPUP;