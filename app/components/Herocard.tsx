"use client";
import { Camera } from "lucide-react";
import React, { ChangeEvent, useRef, useState } from "react";
import { Teacher } from "./Types/Types";
import toast from "react-hot-toast";

const dummy: Teacher = {
  Name: "Mujeeb Rahman TM",
  Code: "T3554R54F5",
  Role: "Teacher",
};

const Reset: Teacher = {
  Name: "",
  Code: "",
  Role: "",
};

interface props {
  isEdit: boolean;
}

const Herocard = ({ isEdit }: props) => {
  const trigger = useRef<HTMLInputElement>(null);
  const [image, setimage] = useState<string | undefined>(undefined);
  const [teacherData, setTeacherData] = useState<Teacher>(dummy);
  const [teacherDataList, setTeacherDataList] = useState<Teacher[]>([]);

  const handleTriggerUpload = () => {
    trigger.current?.click();
  };

  const handleProfilePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setimage(URL.createObjectURL(file));
    }
  };

  const handleTeacherData = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTeacherData((Prev) => ({ ...Prev, [name]: value }));
  };

  const addTeacherData = () => {
    if (teacherData.Name.trim() === "") {
      toast.error("Empty fiels not allowed");
    } else if (!teacherData.Role) {
      toast.error("Please enter the Mail type");
    } else {
      setTeacherDataList((Prev) => [...Prev, teacherData]);
      setTeacherData(Reset);
    }
  };

  return (
    <div
      className="flex md:flex-row flex-col md:items-center items-start gap-[1vw] md:gap-[1vw] 
    p-[3vw] md:p-[1vw] rounded-2xl  bg-card drop-shadow-sm  bg-white"
    >
      <div className="relative">
        <Camera
          className="border bg-white md:h-[3vw] h-[10vw] w-[10vw] md:w-[3vw] md:p-[0.7vh] p-[1.5vw] 
          rounded-full absolute top-0 left-0"
          onClick={handleTriggerUpload}
        />
        <img
          src={image ? image : '/images/user.png'}
          className="md:h-[11vw] h-[31vw] md:w-[11vw] w-[31vw] object-cover rounded-full border"
        />
        <input
          type="file"
          ref={trigger}
          className="hidden"
          onChange={handleProfilePicture}
        />
      </div>
      <div
        className={`flex flex-col w-full  
        ${isEdit ? "gap-[2vw] md:gap-[0.3vw]" : ""}`}
      >
        <input
          placeholder={"Enter the Name"}
          className={`md:text-[1.5vw] text-xl py-[2vw] px-[0vw]  md:py-[0.3vw] md:px-[0vw] border border-gray-300 rounded-xl
            ${isEdit ? "border-gray-400" : "border-none"}`}
          disabled={!isEdit}
          name="Name"
          value={teacherData.Name}
          onChange={handleTeacherData}
        />
        <div className="flex items-center md:gap-[0.5vw] gap-[2vw]">
          <p className="font-bold">Code</p>
          <input
            className={`text-[4vw] md:text-[1vw] p-[2vw] md:p-[0.5vw] w-full md:w-[17vw] 
            border focus:outline-gray-400 rounded-xl
            ${isEdit ? "border-gray-400" : "border-none"}`}
            placeholder="Enter an Id"
            disabled={!isEdit}
            name="Code"
            value={teacherData.Code}
            onChange={handleTeacherData}
          />
        </div>
        <div className="flex items-center md:gap-[0.6vw] gap-[2vw]">
          <p className="font-bold">Role</p>
          <select
            className={`md:p-[0.6vw] p-[1.5vw] rounded-xl border border-gray-300 md:w-[20vw] 
         md:text-[1vw] bg-white focus:outline-gray-400 ${
           isEdit ? "border-gray-400" : "border-none"
         }`}
            disabled={!isEdit}
            name="Role"
            value={teacherData.Role}
            onChange={handleTeacherData}
          >
            <option>Teacher</option>
            <option>Staff</option>
            <option>HOD</option>
            <option>Principal</option>
            <option>Temporary</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Herocard;
