"use client";
import { Mail, Trash } from "lucide-react";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { mail } from "./Types/Types";

const dummy: mail[] = [
  {
    mailId: "mujeebrahman8943@gmail.com",
    type: "Personal",
  },
  {
    mailId: "alex@yahoo.com",
    type: "Work",
  }
];

const Reset: mail = {
  mailId: "",
  type: "",
};

interface props {
  isEdit: boolean;
}

const Email = ({ isEdit }: props) => {
  const [mail, setMail] = useState<mail>(Reset);
  const [mailList, setMailList] = useState<mail[]>([]);

  const handleEmail = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMail((Prev) => ({ ...Prev, [name]: value }));
  };

  const addEmail = () => {
    if (mailList.length > 2) {
      toast.error("Three Mails are only allowed");
    } else if (mail.mailId.trim() === "") {
      toast.error("Empty fiels not allowed");
    } else if (!mail.type) {
      toast.error("Please enter the Mail type");
    } else {
      setMailList((Prev) => [...Prev, mail]);
      setMail(Reset);
    }
  };

  const handleDeleteEmail = (mail: string) => {
    setMailList((Prev) => Prev.filter((m) => m?.mailId !== mail));
  };

  useEffect(() => {
    setMailList(dummy);
  });

  return (
    <div
      className=" w-full flex flex-col md:gap-[1vw] gap-[5vw] 
      md:p-[1vw] p-[3vw] bg-white rounded-xl drop-shadow-sm "
    >
      <div className="flex items-center md:gap-[0.4vw] gap-[1.5vw] ">
        <Mail className="md:w-[1.3vw] w-[5vw]" />
        <p className="md:text-[1.3vw] text-l font-bold px-[0.5vw]">Email</p>
      </div>

      {mailList.length > 0 ? (
        <div className="flex flex-col md:gap-[0.5vw] gap-[1vw]">
          {mailList?.map((M, index) => (
            <div
              className="flex items-center justify-between gap-[0.5vw] md:p-[0.4vw] p-[1.3vw]
              rounded-xl border border-gray-300 bg-white"
              key={index}
            >
              <div className="flex items-center justify-start gap-[1vw]">
                <div
                  className={`p-[2vw] md:p-[0.5vw] rounded-xl w-fit  text-center ${
                    M.type === "Work" ? "bg-green-400" : "bg-amber-400"
                  }`}
                >
                  <p className="text-xs text-white">{M.type}</p>
                </div>
                <div>
                  <p>{M.mailId}</p>
                </div>
              </div>
              {isEdit ? (
                <Trash
                  onClick={() => handleDeleteEmail(M.mailId)}
                  className="md:h-[1.5vw] md:w-[1.5vw] h-[3vh] w-[5vw] text-red-300"
                />
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="p-[0.5vw]">
          <p className="text-gray-400 md:text-[1vw] ">No Emails</p>
        </div>
      )}

      {mailList.length < 1 || isEdit ? (
        <div className="flex items-center gap-[2vw] md:gap-[0.5vw] md:flex-row flex-col w-full">
          <input
            className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full md:flex-grow
          focus:outline-gray-400 bg-white min-w-6/10"
            name="mailId"
            value={mail?.mailId}
            onChange={handleEmail}
            placeholder="Enter your Email"
          />
          <div className="flex items-center w-full md:gap-[0.5vw] gap-[2vw]">
            <select
              className="md:p-[0.8vw] p-[2.4vw] rounded-xl border border-gray-300 md:w-full w-full
               md:text-[1vw]  bg-white focus:outline-gray-400"
              name="type"
              value={mail?.type}
              onChange={handleEmail}
            >
              <option>Work</option>
              <option>Personal</option>
            </select>

            <button
              className="border md:p-[0.6vw] p-[2.2vw] md:w-full w-full rounded-xl border-gray-300 
            hover:text-white hover:bg-black/80 md:text-[1vw] bg-white"
              onClick={addEmail}
            >
              Add
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Email;
