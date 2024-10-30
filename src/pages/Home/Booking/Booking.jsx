import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import PagesBanner from "../../../component/PagesBanner/PagesBanner";
import toast from "react-hot-toast";
import useAxios from "../../../hook/useAxios";

function Booking() {
  const product = useLoaderData();
  
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const axiosCommon = useAxios();

  const onSubmit = (data) => {
    const { name, price, image } = product;
    const { firstName, email, phone, massage } = data;
    const bookItemDetails = {
      productName: name,
      userName: firstName,
      email,
      userPhone: phone,
      productPrice: price,
      productImage: image,
      massage,
    };
    axiosCommon
      .post("/booking", bookItemDetails, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (!res.data.success) {
          return toast.error("Something wrong");
        }
        toast.success("Your order successed!");
        reset();
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6">
      <PagesBanner title={"Check Out"}></PagesBanner>
      <h1 className="text-4xl font-bold text-center my-8">Product Details</h1>

      {/* Product Image and Details */}
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="w-full md:w-1/4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 rounded-lg shadow-md object-contain border-4 border-gray-200"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold">{product.name}</h2>
          <p className="text-lg mt-2">Price: ${product.price}</p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg w-full"
      >
        {/* First Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            defaultValue={user?.displayName}
            {...register("firstName", { required: true })}
            className={`input input-bordered w-full focus:outline focus:outline-[#ff3811] ${
              errors.firstName ? "border-red-500" : ""
            }`}
            placeholder="First name"
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
        </div>
        {/* Email */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            defaultValue={user?.email}
            {...register("email", { required: true })}
            className={`input input-bordered w-full focus:outline focus:outline-[#ff3811] ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>

        {/* Phone */}
        <div className="form-control  md:col-span-2 w-full">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="tel"
            defaultValue={user?.phone}
            {...register("phone", { required: true })}
            className={`input input-bordered w-full focus:outline focus:outline-[#ff3811] ${
              errors.phone ? "border-red-500" : ""
            }`}
            placeholder="Your phone number"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">Phone is required</span>
          )}
        </div>

        {/* Message */}
        <div className="form-control md:col-span-2 w-full">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            {...register("message")}
            className="textarea textarea-bordered w-full focus:outline focus:outline-[#ff3811]"
            placeholder="Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-control col-span-2 w-full mt-6">
          <input
            type="submit"
            value="Order Confirm"
            className="btn w-full bg-[#ff3811] text-white uppercase"
          />
        </div>
      </form>
    </div>
  );
}

export default Booking;
