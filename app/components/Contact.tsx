"use client";
import { Phone, Trash } from "lucide-react";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { contact } from "./Types/Types";


const Reset: contact = {
  contactNo: "",
  type: "",
};

interface props {
  isEdit: boolean;
}

const Contact = ({ isEdit }: props) => {
  const [contact, setContact] = useState<contact>(Reset);
  const [contactlist, setContactList] = useState<contact[]>([]);

  const handleContact = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setContact((Prev) => ({ ...Prev, [name]: value }));
  };

  const addContact = () => {
    if (contactlist.length > 2) {
      toast.error("Three Contacts are only allowed");
    } else if (contact.contactNo.trim() === "") {
      toast.error("Empty fiels not allowed");
    } else if (!contact.type) {
      toast.error("Please enter the Contact type");
    } else {
      setContactList((Prev) => [...Prev, contact]);
      setContact(Reset);
    }
  };

  const handleDeleteContact = (contactNo: string) => {
    setContactList((Prev) => Prev.filter((m) => m?.contactNo !== contactNo));
  };


  

  return (
    <div
      className=" w-full flex flex-col md:gap-[1vw] gap-[5vw] 
      md:p-[1vw] p-[3vw] bg-white rounded-xl drop-shadow-sm  "
    >
      <div className="flex items-center md:gap-[0.4vw] gap-[1.5vw] ">
        <Phone className="md:w-[1.3vw] w-[5vw]" />
        <p className="md:text-[1.3vw] text-l font-bold px-[0.5vw]">Contact</p>
      </div>
      {contactlist.length > 0 ? (
        <div className="flex flex-col md:gap-[0.5vw] gap-[1vw]">
          {contactlist?.map((M, index) => (
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
                  <p>{M.contactNo}</p>
                </div>
              </div>
              {isEdit ? (
                <Trash
                  onClick={() => handleDeleteContact(M.contactNo)}
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
          <p className="text-gray-400 md:text-[1vw] ">No Contacts</p>
        </div>
      )}
      {contactlist.length < 1 || isEdit ? (
        <div className="flex items-center gap-[2vw] md:gap-[0.5vw] md:flex-row flex-col w-full">
          <input
            className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 min-w-6/10 w-full md:flex-grow
          focus:outline-gray-400 bg-white"
            name="contactNo"
            value={contact?.contactNo}
            onChange={handleContact}
            placeholder="Enter your Contact"
          />
          <div className="flex items-center w-full md:gap-[0.5vw] gap-[2vw]">
            <select
              className="md:p-[0.8vw] p-[2.4vw] rounded-xl border border-gray-300 md:w-full w-full
               md:text-[1vw]  bg-white focus:outline-gray-400"
              name="type"
              value={contact.type}
              onChange={handleContact}
            >
              <option>Work</option>
              <option>Personal</option>
            </select>

            <button
              className="border md:p-[0.6vw] p-[2.2vw] md:w-full w-full rounded-xl border-gray-300 
            hover:text-white hover:bg-black/80 md:text-[1vw] bg-white"
              onClick={addContact}
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

export default Contact;
