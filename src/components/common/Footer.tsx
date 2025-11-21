import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import AASCLogo from "@/assets/images/common/AASC-Logo.png";

const Footer = () => {
  return (
    <footer className="px-10 mt-10 bg-purple text-white relative border-t border-purple">
      {/* Pattern BG */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/pattern-bg.png')",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="relative z-10 container-lg py-10 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={AASCLogo}
            width={150}
            alt="AASC Logo"
            className="mx-auto md:mx-0 bg-white p-4"
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

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">About Us</h3>
          <p className="text-sm text-gray-100 leading-relaxed">
            Achariya Arts and Science College, Puducherry provides a holistic
            education with focus on excellence, innovation, discipline and
            leadership—offering a wide range of UG & PG programs. Achariya Arts
            and Science College, Puducherry provides a holistic education with
            focus on excellence, innovation, discipline .
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Important Links
          </h3>
          <ul className="space-y-1 text-sm text-gray-100">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/profile-of-the-college">
                Profile of the College
              </Link>
            </li>
            <li>
              <Link to="/about/principal-desk">Principal Desk</Link>
            </li>
            <li>
              <Link to="/about/chief-mentors-desk">Chief Mentor's Desk</Link>
            </li>
            <li>
              <Link to="/about/media-talks">Media Talks</Link>
            </li>
            <li>
              <Link to="/about/press-releases">Press Releases</Link>
            </li>
          </ul>
        </div>

        {/* Academic + Others */}
        <div>
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
              <a
                href="#"
                className="bg-pink-600 p-2 rounded-full hover:scale-105 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-400/30 my-4" />

      <div className="relative z-10 border-t border-purple/40 bg-purple/20 py-3 text-center text-sm text-gray-200">
        © 2025 All Rights Reserved | Achariya Arts and Science College
      </div>
    </footer>
  );
};

export default Footer;
