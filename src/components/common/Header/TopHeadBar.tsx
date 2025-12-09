import React from "react";
import file from "@/assets/documents/NIRF/Achariya-Arts-and-Science-College20250108.pdf";
import { Link, useNavigate } from "react-router-dom";
import AISHELOGO from "@/assets/images/common/aishe.png";

const TopHeaderBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Go to home page first

    // Wait for home to finish rendering, then scroll
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // 200ms ensures home page is fully rendered
  };
  return (
    <div className="bg-purple py-2 overflow-x-auto border-b border-b-[2px] border-gray-200">
      <div className=" mx-auto px-3 ps-4 flex items-center justify-between">
        {/* Left Side - Contact Info */}
        <div className="flex items-center gap-1 text-white text-sm">
          <div className="pe-3 border-r border-gray-200">
            <span className="font-semibold">Contact :</span>
            <span>+91 413 2615596 / 2615597</span>
          </div>
          {/* Email */}
          <div className="flex ps-3 items-center gap-1 text-white text-sm">
            <span className="font-semibold">Email :</span>
            <span>info@achariya.ac.in</span>
          </div>
        </div>

        {/* Right Side - Email and Badges */}
        <div className="flex items-center gap-2">
          {/* Online Payment Button */}
          <div className="bg-white px-2 h-8 flex items-center justify-center">
            <button className=" text-xs font-bold">Online Payment</button>
          </div>

          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center border-2 border-purple">
            <span className="text-purple text-[8px] font-bold leading-tight text-center">
              UGC
            </span>
          </div>

          {/* Badge 3 - ISO */}
          <div className="bg-red px-2 h-8 flex items-center justify-center">
            <button className="text-white text-xs font-bold">ISO </button>
          </div>

          {/* Badge 2 - NAAC */}
          {/* <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-purple overflow-hidden">
            <div className="text-center">
              <div className="text-purple text-[7px] font-bold leading-none">
                NAAC
              </div>
              <div className="text-purple text-[6px] leading-none">
                A+ Grade
              </div>
            </div>
          </div> */}

          {/* Badge 4 - AISHE */}
          <div className="bg-white w-14 h-8 flex items-center justify-center border border-gray-300">
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xs font-bold hover:text-heading-purple transition-colors"
            >
              NIRF
            </a>
          </div>
          {/* Badge 4 - AISHE */}
          <div className="bg-white w-14 h-8 flex items-center justify-center border border-gray-300">
            <a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xs font-bold hover:text-heading-purple transition-colors"
            >
              <img src={AISHELOGO} alt="" />
            </a>
          </div>

          {/* Badge 5 - ERP */}
          <div className="bg-[#00BCD4] w-12 h-8 flex items-center justify-center">
            <span className="text-white text-xs font-bold">ERP</span>
          </div>

          {/* Badge 3 - FOR ADMISSIONS */}
          <div className="bg-red px-2 h-8 flex items-center justify-center">
            <button
              onClick={handleClick}
              className="text-white text-xs font-bold"
            >
              For Admissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeaderBar;
