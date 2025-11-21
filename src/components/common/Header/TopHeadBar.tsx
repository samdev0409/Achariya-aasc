import React from 'react';
import file from "@/assets/documents/NIRF/Achariya-Arts-and-Science-College20250108.pdf"

const TopHeaderBar = () => {
  return (
    <div className="bg-purple py-2 overflow-x-auto border-b border-b-[2px] border-gray-200">
      <div className=" mx-auto px-8 flex items-center justify-between">
        {/* Left Side - Contact Info */}
        <div className="flex items-center gap-1 text-white text-sm">
          <span className="font-semibold">Contact :</span>
          <span>+91 413 2615596 / 2615597</span>
        </div>

        {/* Right Side - Email and Badges */}
        <div className="flex items-center gap-3">
          {/* Email */}
          <div className="flex items-center gap-1 text-white text-sm">
            <span className="font-semibold">Email :</span>
            <span>info@achariya.ac.in</span>
          </div>

          {/* Online Payment Button */}
          {/* <button className="bg-white px-3 py-1 rounded text-purple text-xs font-bold flex items-center gap-1.5 hover:bg-white/90 transition-colors border border-purple">
            Online Payment
            <span className="text-red text-[10px] font-bold">NEW</span>
          </button> */}

          {/* Badge 1 - UGC */}
          {/* <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-purple">
            <span className="text-purple text-[8px] font-bold leading-tight text-center">UGC</span>
          </div> */}

          {/* Badge 2 - NAAC */}
          {/* <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center border-2 border-purple overflow-hidden">
            <div className="text-center">
              <div className="text-purple text-[7px] font-bold leading-none">NAAC</div>
              <div className="text-purple text-[6px] leading-none">A+ Grade</div>
            </div>
          </div> */}

          {/* Badge 3 - ISO */}
          <div className="bg-red px-2 h-8 flex items-center justify-center">
            <a href='#contact' className="text-white text-xs font-bold">For Admissions</a>
          </div>

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

          {/* Badge 5 - ERP */}
          {/* <div className="bg-[#00BCD4] w-12 h-8 flex items-center justify-center">
            <span className="text-white text-xs font-bold">ERP</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopHeaderBar;