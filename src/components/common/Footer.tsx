import React from "react";
import { Facebook, Youtube } from "lucide-react";
import AASCLogo from "@/assets/common/AASC-Logo.png";

const Footer = () => {
  return (
    <footer className="px-10 mt-10 bg-purple text-white relative border-t border-purple">
      {/* Patterned background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/pattern-bg.png')", // optional patterned background
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative z-10 container-lg  py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo + Visitors */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={AASCLogo}
            alt="Achariya Arts and Science College Logo"
            className="w-48 mx-auto md:mx-0 bg-white p-4"
          />
          <h3 className="text-lg font-semibold text-white">Visitors</h3>
          <div className="flex space-x-1 bg-black/40 p-2 rounded">
            {"0123456".split("").map((num, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-black/70 text-green-300 font-mono text-sm rounded"
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        {/* About Us */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white mb-2">About Us</h3>
          <p className="text-sm text-gray-100 leading-relaxed max-w-md">
            Achariya Arts and Science College, Puducherry, is one of the premier
            institutions under the Achariya Group of Educational Institutions.
            Established with a vision to provide holistic education and empower
            students with academic excellence, values, and skills, Achariya
            offers a wide range of undergraduate and postgraduate programs in
            arts, science, and commerce. The college fosters innovation,
            discipline, and leadership among its students, preparing them to
            excel in their chosen fields.
          </p>
        </div>

        {/* Quick Links + Contact */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm text-gray-100">
              <li>Home</li>
              <li>Admission</li>
              <li>Courses</li>
              <li>Gallery</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Contact Details
            </h3>
            <ul className="space-y-1 text-sm text-gray-100">
              <li>info@achariya.ac.in</li>
              <li>https://www.achariya.ac.in</li>
              <li>
                Achariya Arts and Science College, <br />
                Villianur, Puducherry – 605110
              </li>
              <li>+91 413 2615596 / 2615597</li>
            </ul>
            <div className="flex gap-3 mt-3">
              <a
                href="#"
                className="bg-red-600 p-2 rounded-full hover:scale-105 transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-blue-600 p-2 rounded-full hover:scale-105 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-400/30 my-4" />

      {/* Footer Bottom Bar */}
      <div className="relative z-10 border-t border-purple/40 bg-purple/20 py-3 text-center text-sm text-gray-200">
        © 2025 All Rights Reserved | Achariya Arts and Science College
      </div>
    </footer>
  );
};

export default Footer;
