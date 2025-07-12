"use client";
import { useState } from "react";
import { CreditCard, Lock } from "lucide-react";

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Processing payment:", cardDetails);
  };

  return (
        <div
      className=" w-full md:w-5/10 flex flex-col md:gap-[1vw] gap-[5vw] 
      md:p-[1vw] p-[3vw] bg-white rounded-xl drop-shadow-sm "
    >
      <div className="flex items-center md:gap-[1vw] gap-[5vw] ">
        <CreditCard className="w-5 h-5 " />
        <p className="md:text-[1.3vw] text-l font-bold px-[0.5vw]">Payment Details</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            placeholder="CardHolder Name"
            name="name"
            value={cardDetails.name}
            onChange={handleChange}
            className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full
          focus:outline-gray-400 bg-white"
          />
        </div>

        <div>
          <input
            name="number"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            maxLength={19}
            value={cardDetails.number}
            onChange={handleChange}
            placeholder="Card Number"
            className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full
          focus:outline-gray-400 bg-white"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <input
              name="expiry"
              placeholder="Expiry : MM/YY"
              value={cardDetails.expiry}
              onChange={handleChange}
              className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full
          focus:outline-gray-400 bg-white"
            />
          </div>
          <div className="w-1/2">
            <input
              name="cvc"
              maxLength={4}
              value={cardDetails.cvc}
              onChange={handleChange}
              placeholder="CVC"
              className="md:p-[0.6vw] p-[2vw] rounded-xl border border-gray-300 w-full
          focus:outline-gray-400 bg-white"
            />
          </div>
        </div>

        <button className="border md:p-[0.6vw] p-[2.2vw] md:w-full w-full rounded-xl border-gray-300 
            hover:text-white hover:bg-black/80 md:text-[1vw] bg-white flex items-center 
            justify-center md:gap-[1vw] gap-[5vw] duration-300">
          <Lock className="w-4 h-4" />
          Pay Securely
        </button>
      </form>
    </div>
  );
};

export default Payment;
