"use client";
import React, { useState } from "react";
import Personalinfo from "./Personalinfo";
import Qualification from "./Qualification";
import Herocard from "./Herocard";
import Address from "./Address";
import Documents from "./Documents";
import { Edit, Plus, Save } from "lucide-react";
import Payment from "./Payment";

const Dashboard = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <div
      className=" flex flex-col md:gap-[1.5vw] gap-[5vw] overflow-y-scroll h-9/10 md:p-[1.5vw] p-[3vw]
       rounded-b-xl shadow bg-gray-100"
    >
      <div className="flex w-full gap-[3vw] md:gap-[1vw] md:justify-end justify-evenly items-center ">
        <button
          className="border md:p-[0.6vw] p-[2.2vw] md:w-[10vw] w-[40vw] rounded-xl border-gray-300 
        hover:text-white hover:bg-black/80 md:text-[1vw] bg-white flex items-center justify-center
        gap-[1vw] md:gap-[0.3vw] duration-300"
          onClick={() => setIsEdit(false)}
        >
          <Plus className="md:h-[3vh] md:w-[2vw] h-[3vh] w-[5vw]  " />
          <p>Add Teacher</p>
        </button>
        <button
          className="border md:p-[0.6vw] p-[2.2vw] md:w-[7vw] w-[20vw] rounded-xl border-gray-300 
        hover:text-white hover:bg-black/80 md:text-[1vw] bg-white flex items-center justify-center
        gap-[1vw] md:gap-[0.3vw] duration-300"
          onClick={() => setIsEdit(true)}
        >
          <Edit className="md:h-[3vh] md:w-[2vw] h-[3vh] w-[5vw] " />
          <p>Edit</p>
        </button>
        <button
          className="border md:p-[0.6vw] p-[2.2vw] md:w-[7vw] w-[20vw] rounded-xl border-gray-300 
        hover:text-white hover:bg-black/80 md:text-[1vw] bg-white flex items-center justify-center
        gap-[1vw] md:gap-[0.3vw]"
          onClick={() => setIsEdit(false)}
        >
          <Save className="md:h-[3vh] md:w-[2vw] h-[3vh] w-[5vw]  " />
          <p>Save</p>
        </button>
      </div>
      <Herocard isEdit={isEdit} />
      <div className="flex items-start flex-wrap md:flex-nowrap md:gap-[1.5vw] gap-[5vw]">
        <Personalinfo isEdit={isEdit} />
        <div className="flex flex-col w-full md:gap-[1.5vw] gap-[5vw] ">
          <Address isEdit={isEdit} />
          <Documents isEdit={isEdit} />
        </div>
      </div>
      <Qualification isEdit={isEdit} />
      <div>
        <Payment />
      </div>
    </div>
  );
};

export default Dashboard;
