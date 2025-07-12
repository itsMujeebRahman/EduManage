import { MapPin } from "lucide-react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Add } from "./Types/Types";
import toast from "react-hot-toast";


const Reset: Add = {
  Address1: "",
  Address2: "",
  Address3: "",
  Code: "",
};

interface props {
  isEdit: boolean;
}

const Address = ({isEdit}:props) => {
  const [Address, setAddress] = useState<Add>(Reset);

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((Prev) => ({ ...Prev, [name]: value }));

    if (Address.Address1.trim() === "") {
      toast.error("Empty fiels not allowed");
    } else if (!Address.Code) {
      toast.error("Please enter the Zip code");
    } else {
      ("");
    }
  };



  return (
    <div
      className=" w-full flex flex-col md:gap-[1vw] gap-[5vw] 
      md:p-[1vw] p-[3vw] bg-white rounded-xl drop-shadow-sm  "
    >
      <div className="flex items-center md:gap-[0.4vw] gap-[1.5vw] ">
        <MapPin className="md:w-[1.3vw] w-[5vw]" />
        <p className="md:text-[1.3vw] text-l font-bold px-[0.5vw]">Address</p>
      </div>
      <div className="flex flex-col md:gap-[0.5vw] gap-[3vw]">
        <input
          className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full
          focus:outline-gray-400 bg-white"
          placeholder="Address Line 1"
          name="Address1"
          value={Address.Address1}
          onChange={handleAddress}
        />
        <input
          className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full
          focus:outline-gray-400 bg-white"
          placeholder="Address Line 2"
          name="Address2"
          value={Address.Address2}
          onChange={handleAddress}
        />
        <input
          className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full
          focus:outline-gray-400 bg-white"
          placeholder="Address Line 3"
          name="Address3"
          value={Address.Address3}
          onChange={handleAddress}
        />
        <div className="flex items-center gap-[3vw] md:gap-[0.5vw]">
          <p className="pl-[1vw]">Pin Code</p>
          <input
            className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 flex-grow
          focus:outline-gray-400 bg-white"
            placeholder="ZIP Code"
            name="Code"
            value={Address.Code}
            onChange={handleAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
