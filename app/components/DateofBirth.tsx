import { Calendar } from "lucide-react";
import React, { useState } from "react";

const DateofBirth = () => {
  const [date, setDate] = useState("");

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  console.log(date);

  const longDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className=" w-full flex flex-col md:gap-[1vw] gap-[5vw] 
      md:p-[1vw] p-[3vw] bg-white rounded-xl drop-shadow-sm  "
    >
      <div className="flex items-center md:gap-[0.4vw] gap-[1.5vw] ">
        <Calendar className="md:w-[1.3vw] w-[5vw]" />
        <p className="md:text-[1.3vw] text-l font-bold px-[0.5vw]">
          Date of Birth
        </p>
      </div>
      <div className="flex items-center justify-end md:gap-[0.4vw] gap-[1.5vw] ">
        {longDate !== "Invalid Date" ? (
          <p className="md:text-[1.3vw] text-l font-sans px-[0.5vw]">
            {longDate === "Invalid Date" ? "" : longDate}
          </p>
        ) : (
          <div className="p-[0.5vw] w-full text-left">
            <p className="text-gray-400 md:text-[1vw] ">No Date of Birth Added</p>
          </div>
        )}
      </div>
      <input
        className="md:p-[0.7vw] p-[2vw] bg-white w-full border border-gray-300 
          focus:outline-gray-400 rounded-xl"
        type="date"
        value={date}
        onChange={handleDate}
      />
    </div>
  );
};

export default DateofBirth;
