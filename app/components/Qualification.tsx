"use client";
import { GraduationCap, Trash } from "lucide-react";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Qualify } from "./Types/Types";


const Reset: Qualify = {
  Collage: "",
  Studies: "",
  Score: "",
};

interface props {
  isEdit: boolean;
}

const Qualification = ({ isEdit }: props) => {
  const [qualification, setQualification] = useState<Qualify>(Reset);
  const [qualificationList, setQualificationList] = useState<Qualify[]>([]);

  const handleQualification = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setQualification((Prev) => ({ ...Prev, [name]: value }));
  };

  const addQualification = () => {
    if (qualification.Collage.trim() === "") {
      toast.error("Empty fiels not allowed");
    } else if (!qualification.Studies) {
      toast.error("Please enter the Studies type");
    } else {
      setQualificationList((Prev) => [...Prev, qualification]);
      setQualification(Reset);
    }
  };

  const handleDeleteQualification = (collage: string) => {
    setQualificationList((Prev) => Prev.filter((m) => m?.Collage !== collage));
  };


  return (
    <div className="flex flex-col gap-[3vw] md:gap-[1vw] border-t border-gray-300  ">
      <div className="flex items-center  md:gap-[0.4vw] gap-[1.5vw] md:pt-[1vw] pt-[5vw]">
        <GraduationCap className="md:w-[1.3vw] w-[5vw]" />
        <p className="md:text-[1.3vw] text-l font-bold px-[0.5vw]">
          Qualifications
        </p>
      </div>
      <div
        className=" w-full flex flex-col md:gap-[1vw] gap-[5vw] 
        md:p-[1vw] p-[3vw] bg-white rounded-xl drop-shadow-sm "
      >
        {qualificationList.length > 0 ? (
          <div className="flex flex-col md:gap-[0.5vw] gap-[1vw]">
            {qualificationList?.map((M, index) => (
              <div
                className="flex md:flex-row flex-col gap-[0.5vw] md:p-[0.6vw] p-[2vw]
              rounded-xl border-gray-300 bg-white border"
                key={index}
              >
                <div className=" md:w-2/10 border-r border-gray-300 ">
                  {M.Studies}
                </div>
                <div className=" md:w-5/10 border-r border-gray-300 ">
                  {M.Collage}
                </div>
                <div className=" md:w-2/10  ">{M.Score}</div>
                {isEdit ? (
                  <div className="md:w-1/10 flex justify-end pl-[5vw] md:pl-[0] ">
                    <Trash
                      onClick={() => handleDeleteQualification(M.Score)}
                      className="md:h-[1.5vw] md:w-[1.5vw] h-[3vh] w-[5vw] text-red-300  "
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="p-[1vw] md:p-[1vw]">
            <p className="text-gray-400 md:text-[1vw] ">
              No Qualification Details
            </p>
          </div>
        )}

        <div className=" flex md:flex-row flex-col gap-[2vw] md:gap-[0.5vw] w-full">
          <select
            className="  md:p-[0.8vw] p-[2.4vw] rounded-xl border border-gray-300 md:w-full w-full
               md:text-[1vw] bg-white focus:outline-gray-400"
            name="Studies"
            value={qualification?.Studies}
            onChange={handleQualification}
          >
            <option>Studies</option>
            <option>School</option>
            <option>Bachelors</option>
            <option>Masters</option>
            <option>Post Grad</option>
            <option>PHD</option>
            <option>Doctorate</option>
          </select>
          <input
            className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full md:flex-grow
          focus:outline-gray-400 bg-white "
            name="Collage"
            value={qualification?.Collage}
            onChange={handleQualification}
            placeholder="College / University Name"
          />
          <div className="flex md:flex-row flx-col"></div>
          <input
            className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full md:flex-grow
          focus:outline-gray-400 bg-white"
            name="Score"
            value={qualification?.Score}
            onChange={handleQualification}
            placeholder="CGPA / Percentage"
          />

          <button
            className="border md:p-[0.6vw] p-[2.2vw] md:w-full w-full rounded-xl border-gray-300 
        hover:text-white hover:bg-black/80 md:text-[1vw] bg-white"
            onClick={addQualification}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
