import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const useToast = () => {
  const isToast = useSelector((state: RootState) => state.toast.isToast);
  return isToast;
};
export default useToast;
