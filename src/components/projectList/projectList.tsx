import useProject from "@/customHooks/useProject/useProject";
import ProjectItem from "../projectItem/projectItem";

interface projectItemType {
  _id: string;
  title: string;
  status: string;
  complationStatus: number;
}

const ProjectList = () => {
  const projectData = useProject();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-900 text-gray-200 border border-gray-700 rounded-lg shadow">
        <thead className="bg-gray-800 text-gray-300 uppercase text-sm">
          <tr>
            <th className="px-6 py-3 border-b border-gray-700 text-left">
              Project Title
            </th>
            <th className="px-6 py-3 border-b border-gray-700 text-left">
              Status
            </th>
            <th className="px-6 py-3 border-b border-gray-700 text-left">
              Completion Status
            </th>
          </tr>
        </thead>
        <tbody>
          {projectData?.data?.map((item: projectItemType) => (
            <ProjectItem
              key={item._id}
              _id={item._id}
              title={item.title}
              status={item.status}
              complationStatus={item.complationStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProjectList;
