import axios from "axios";

function useAxios() {
  const axiosCommon = axios.create({
    baseURL: "http://localhost:5000",
  });

  return axiosCommon;
}

export default useAxios;
