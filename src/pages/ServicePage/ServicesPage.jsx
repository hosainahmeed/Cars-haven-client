import PagesBanner from "../../component/PagesBanner/PagesBanner";
import { GiCancel } from "react-icons/gi";
import useAuth from "../../hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hook/useAxios";
import { useEffect, useState, useMemo } from "react";

function SkeletonLoader() {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

function ServicesPage() {
  const { user } = useAuth();
  const axiosCommon = useAxios();
  
  const {
    data: bookingData = [],
    isLoading: bookingLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const result = await axiosCommon.get(`/booking?email=${user?.email}`, {
        withCredentials: true,
      });
      return result.data;
    },
  });

  const total = useMemo(
    () => bookingData.reduce((acc, item) => acc + Number(item.productPrice), 0),
    [bookingData]
  );

  const deleteItemHandle = (id) => {
    axiosCommon.delete(`/booking/${id}`)
      .then(() => refetch())
      .catch((err) => console.error("Delete failed", err));
  };

  if (bookingLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-4 min-h-screen items-center">
        {Array.from({ length: 9 }).map((_, idx) => (
          <SkeletonLoader key={idx} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error loading bookings.</div>;
  }

  return (
    <div>
      <PagesBanner title="Your Booking" />
      <h1 className="text-2xl font-black text-center mt-12 py-4">
        All booking Items: {bookingData.length}
      </h1>
      <h1 className="text-2xl font-black text-center">Total Price: ${total}</h1>
      
      <div className="py-12">
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {bookingData.map((item) => (
                <tr key={item._id}>
                  <th>
                    <button
                      onClick={() => deleteItemHandle(item._id)}
                      className="btn btn-circle"
                      aria-label="Delete booking"
                    >
                      <GiCancel style={{ fontSize: "24px" }} />
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="w-24 rounded">
                          <img src={item.productImage} alt={item.productName} />
                        </div>
                      </div>
                      <div className="text-xl">
                        <div className="font-bold">
                          {item.productName}
                        </div>
                        <div className="text-sm opacity-50">
                          <b>Size:</b> s
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-semibold">Price: ${item.productPrice}</td>
                  <td>{new Date(item.bookingDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
