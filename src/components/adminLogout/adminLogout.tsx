import { userLogout } from "@/features/userSlice/userSlice";
import { AppDispatch } from "@/store/store";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const AdminLogout = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(userLogout());
    router.push("/login");
  };
  return (
      <button
        onClick={handleLogout}
        className="flex justify-center items-center cursor-pointer gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 transition-all duration-200 shadow-md"
      >
        Logout
      </button>
  );
};
export default AdminLogout;
