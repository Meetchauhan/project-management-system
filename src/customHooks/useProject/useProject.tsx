import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const useProject = () => {
  const project = useSelector((state: RootState) => state.project.data);
  return project;
};
export default useProject;
