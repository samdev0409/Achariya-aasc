import React, { useEffect, useState } from "react";
import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import campus from "@/assets/images/aasc_building.webp";
import HeadingUnderline from "@/components/reusable/HeadingUnderline";
import Heading from "@/components/reusable/Heading";
import axiosInstance from "@/utils/axiosInstance"; 

const GoverningBodyCouncil = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Governing Body Data
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axiosInstance.get("/about__governingbodycouncildata");
        setMembers(res.data || []);
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load governing body members.");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <BannerAndBreadCrumb title="Governing Body Council" img={campus} />

      <div className="text-center py-10">
        <Heading
          title="Governing Body Council - Members"
          size="lg"
          align="center"
        />
        <HeadingUnderline width={200} align="center" />
      </div>

      <div className="container space-y-3">

        {/* LOADING UI */}
        {loading && (
          <p className="text-center text-gray-500 py-10">Loading members...</p>
        )}

        {/* ERROR UI */}
        {error && (
          <p className="text-center text-red-600 py-10">{error}</p>
        )}

        {/* MEMBERS DATA */}
        {!loading && !error && members.length === 0 && (
          <p className="text-center text-gray-500 py-10">No members found.</p>
        )}

        {!loading &&
          !error &&
          members.map((member, index) => (
            <section
              key={index}
              className="border-b border-gray-300 py-6 grid grid-cols-3 md:grid-cols-3 rounded-md overflow-hidden"
            >
              {/* IMAGE */}
              <div className="flex items-center justify-center col-span-1 md:border-r border-gray-300 px-4 pb-4 md:pb-0">
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full ring-1 ring-gray-300 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* NAME + BASIC INFO */}
              <div className="flex flex-col justify-center text-left px-4 gap-1 col-span-2 md:col-span-1 md:border-r border-gray-300 pb-4 md:pb-0">
                <h4 className="md:text-xl text-md font-semibold">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-600">{member.department}</p>

                {/* Visible only on md+ */}
                <p className="text-sm text-gray-700 md:block hidden mt-1">
                  {member.designation}
                </p>
              </div>

              {/* RIGHT SIDE — DESIGNATION */}
              <div className="hidden md:flex flex-col justify-center p-6">
                <Heading
                  title="Designation"
                  size="sm"
                  align="left"
                  className="tracking-wide font-semibold mb-2"
                />
                <p className="text-gray-700">{member.designation}</p>
              </div>
            </section>
          ))}
      </div>
    </div>
  );
};

export default GoverningBodyCouncil;
