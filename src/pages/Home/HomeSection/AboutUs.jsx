import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div
      id="about"
      className="flex md:py-28 md:mb-12 md:flex-row flex-col-reverse items-center justify-between gap-12 px-3"
    >
      <div
        className="w-full rounded-lg shadow-2xl md:w-1/2 h-[300px] md:h-[600px] p-12 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${person})` }}
      >
        <div className="hidden  md:flex md:absolute w-1/2 p-4 bg-white rounded-lg  -translate-x-1/3 top-3/4 left-3/4 transform">
          <img className=" " src={parts} alt="Parts" />
        </div>
      </div>
      <div className="md:w-1/2 md:p-8 flex flex-col items-start justify-between gap-12">
        <p className="text-lg text-gray-600 mb-2">About Us</p>
        <div>
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            We are qualified & experienced in this field
          </h1>
          <p className="text-base text-gray-700 mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="text-base text-gray-700 mb-4">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="flex gap-2 mt-4 justify-center md:justify-start">
          <Link to={"/about"}>
            <button className="btn bg-[#ff3811] text-white hover:text-[#ff3811] hover:bg-white">
              Get More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
