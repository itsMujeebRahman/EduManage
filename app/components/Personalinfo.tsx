import React, { useState } from "react";
import Address from "./Address";
import Contact from "./Contact";
import Email from "./Email";
import { Calendar } from "lucide-react";
import DateofBirth from "./DateofBirth";

interface props {
  isEdit: boolean;
}

const Personalinfo = ({ isEdit }: props) => {
  return (
    <div className="w-full h-fit ">
      <div className="flex flex-col md:gap-[1.5vw] gap-[5vw]">
        <DateofBirth />
        <Email isEdit={isEdit} />
        <Contact isEdit={isEdit} />
      </div>
    </div>
  );
};

export default Personalinfo;
