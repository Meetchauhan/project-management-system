import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const useProfile = () => {
  const profile = useSelector((state: RootState) => state.profile);
  return profile;
};
export default useProfile;
