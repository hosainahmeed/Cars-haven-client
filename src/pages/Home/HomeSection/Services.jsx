import { FaArrowCircleRight } from "react-icons/fa";
import SectionTitle from "../../../component/sectionheader/SectionTitle";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hook/useAxios";
function Services() {
  const axiosCommon = useAxios();
  const { data: serviceData = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const result = await axiosCommon.get("/services");
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div
      id="services"
      className="px-3 max-w-screen-2xl py-28 flex flex-col items-center gap-12"
    >
      <SectionTitle
        subTitle="Service"
        title="Our Service Area"
        details="the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly believable."
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {serviceData.map((services) => (
          <div key={services._id}>
            <div className="card bg-base-100 border-2 shadow-xl">
              <figure className="p-2">
                <img
                  src={services.image}
                  alt={services.title}
                  className="rounded-xl h-56"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-start text-2xl font-bold">
                  {services.title}
                </h2>
                <div className="flex items-center w-full justify-between">
                  <p className="text-start text-red-500">
                    Price : ${services.price}
                  </p>
                  <Link to={`/services/${services._id}`}>
                    <div className="hover:-rotate-180 cursor-pointer hover:transition-all">
                      <FaArrowCircleRight
                        style={{ fontSize: "40px", color: "red" }}
                      ></FaArrowCircleRight>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn hover:bg-[#ff3811] border-[#ff3811] bg-transparent text-[#ff3811]  hover:text-[#fff]">
        More Services
      </button>
    </div>
  );
}

export default Services;
