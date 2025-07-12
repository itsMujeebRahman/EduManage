"use client";
import {
  Bell,
  BookOpen,
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Settings,
  User,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface props {
  enableNav: boolean;
  selectMenu: string;
  setSelectMenu: React.Dispatch<React.SetStateAction<string>>;
  setEnableNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const menuItems = [
  { title: "Dashboard", icon: <Home />, url: "/" },
  { title: "Teachers", icon: <Users />, url: "/Teachers" },
  { title: "Students", icon: <User />, url: "/Students" },
  { title: "Schedule", icon: <Calendar />, url: "/Schedule" },
  { title: "Courses", icon: <BookOpen />, url: "/Courses" },
  { title: "Reports", icon: <FileText />, url: "/Reports" },
  { title: "Messages", icon: <MessageSquare />, url: "/Messages" },
  { title: "Notifications", icon: <Bell />, url: "/Notifications" },
  { title: "Settings", icon: <Settings />, url: "/Settings" },
];

const Navbar = ({
  enableNav,
  selectMenu,
  setSelectMenu,
  setEnableNav,
}: props) => {
  const handleSelect = (title: string) => {
    setSelectMenu(title);
    setEnableNav(false);
  };
  return (
    <div
      className={`md:w-3/20  md:pt-[1vw] z-50 border-r border-gray-300
    ${
      enableNav
        ? " top-0 l-0 h-screen absolute w-screen bg-black/50"
        : "md:block hidden"
    }`}
    >
      <div className={`${enableNav ? " w-7/10 h-full bg-white" : ""}`}>
        <div className="flex items-center justify-between md:justify-between p-[5vw] md:p-[1vw] ">
          <div className="flex items-center justify-start gap-[2vw] md:gap-[0.2vw] ">
            <BookOpen
              className="md:h-[5vh] md:w-[2.5vw] h-[5vh] w-[9vw] fill-background bg-transparent
             text-black"
            />
            <p className="font-bold md:text-[1.5vw] text-[6vw]  ">EduManage</p>
          </div>
          <X className="md:hidden" onClick={() => setEnableNav(false)} />
        </div>
        <div className=" p-[5vw] md:p-[0.6vw] flex flex-col md:gap-[0.5vw] gap-[3vw]  ">
          {menuItems?.map((m, index) => (
            <Link
              onClick={() => handleSelect(m.title)}
              href={m.url}
              key={index}
              className={`flex items-center justify-start rounded-xl md:p-[0.8vw] p-[3vw] 
            md:gap-[0.5vw] gap-[3vw] duration-300 hover:bg-black/5 ${
              selectMenu === m.title ? "bg-black/5" : ""
            }`}
            >
              {m.icon}
              <p>{m.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
