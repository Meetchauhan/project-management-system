import axios from "axios";

const axiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: false,
});

export default axiosPublic;
