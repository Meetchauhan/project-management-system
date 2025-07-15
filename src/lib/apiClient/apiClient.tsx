import axiosPrivate from "../axios/axiosPrivate";
import axiosPublic from "../axios/axiosPublic";

const apiClient = (isAuth = false) => (isAuth ? axiosPrivate : axiosPublic);

export default apiClient;
