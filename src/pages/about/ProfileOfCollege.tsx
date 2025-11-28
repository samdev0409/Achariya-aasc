import BannerAndBreadCrumb from "@/components/BannerAndBreadCrumb";
import { profileOfCollegeData } from "@/data/about/profileofcollegedata";
import Heading from "@/components/reusable/Heading";

const ProfileOfCollege = () => {
  const { banner, header, details } = profileOfCollegeData;

  // ---- GROUPING LOGIC ----
  const firstGroup = details.slice(0, 3); // first three items
  const remaining = details.slice(3); // others

  return (
    <>
      <BannerAndBreadCrumb img={banner.image} title={banner.title} />

      <div className="flex flex-col container pt-10">
        <main className="flex-grow">
          {/* HEADER */}
          <section className="bg-secondary border-border">
            <div className="text-center">
              <img
                src={header.logo}
                className="mx-auto pb-7 md:w-[300px] w-48"
                
                alt=""
              />

              <Heading
                title={header.title}
                size="lg"
                align="center"
                className="mb-4 capitalize"
              />

              <p className="text-base leading-relaxed">{header.description}</p>
            </div>
          </section>

          {/* DETAILS SECTION */}
          <section className="py-5 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 border-gray-300">
              {/* 🔥 FIRST COLUMN — FIRST THREE ITEMS COMBINED */}
              <div className="p-5  md:border-r border-gray-300">
               
                {firstGroup.map((section, i) => (
                  <div key={i} className="mb-4 border-b border-gray-300 md:border-b-0 md:py-0 py-3">
                    <Heading
                      title={
                        <span className="flex md:flex-row flex-wrap justify-center items-center gap-2">
                          <span className="text-purple">
                            <section.icon />
                          </span>
                          {section.title}
                        </span>
                      }
                      size="sm"
                      align="center"
                      className="font-semibold"
                    />

                    {section.items.map((item, idx) => (
                      <div key={idx} className="mt-1 mb-3">
                        {item.label !== "Type" &&
                          item.label !== "Category" &&
                          item.label !== "Area" && (
                            <p className="mt-1 font-semibold">{item.label}</p>
                          )}
                        <p>{item.value}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* 🔥 REMAINING ITEMS AS INDIVIDUAL GRID BOXES */}
              {remaining.map((section, index) => (
                <div
                  key={index}
                  className={`p-5 ${
                    index < remaining.length - 1
                      ? "border-b md:border-b-0 md:border-r"
                      : ""
                  } border-gray-300`}
                >
                  <Heading
                    title={
                      <span className="flex md:flex-row flex-wrap  justify-center items-center gap-2">
                        <span className="text-purple">
                          <section.icon />
                        </span>
                        {section.title}
                      </span>
                    }
                    size="sm"
                    align="center"
                    className="font-semibold"
                  />

                  {section.items.map((item, idx) => (
                    <div key={idx} className="mt-1 mb-3">
                      {item.label !== "Type" &&
                        item.label !== "Category" &&
                        item.label !== "Area" && (
                          <p className="mt-1 font-semibold">{item.label}</p>
                        )}
                      <p>{item.value}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProfileOfCollege;
