import Link from "next/link";
// import Select from "../select/select";
// import { useState } from "react";

interface projectItemType {
  _id: string;
  title: string;
  status: string;
  complationStatus: number;
}

const ProjectItem = ({
  _id,
  title,
  status,
  complationStatus,
}: projectItemType) => {
  // const [selectValue, setSelectValue] = useState("Pending");
  // const options = [
  //   {
  //     _id: 0,
  //     title: "Pending",
  //     value: "pending",
  //   },
  //   {
  //     _id: 1,
  //     title: "In Progress",
  //     value: "inProgress",
  //   },
  //   {
  //     _id: 2,
  //     title: "Completed",
  //     value: "completed",
  //   },
  // ];

  return (
    <tr className="hover:bg-gray-800 transition-colors">
      <td className="px-6 py-4 border-b border-gray-700">
        <Link href={`/project/${_id}`}>{title || "—"} </Link>
      </td>

      <td className="px-6 py-4 border-b border-gray-700">
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${
            status === "Completed"
              ? "bg-green-600 text-white"
              : status === "In Progress"
              ? "bg-yellow-500 text-gray-900"
              : status === "Pending"
              ? "bg-red-500 text-white"
              : "bg-gray-600 text-white"
          }`}
        >
          {status || "—"}
        </span>
        {/* <Select
          key={"text"}
          options={options}
          onChange={setSelectValue}
          value={status ?? selectValue}
        /> */}
      </td>
      <td className="px-6 py-4 border-b border-gray-700">
        {`${complationStatus} %`}
      </td>
    </tr>
  );
};
export default ProjectItem;
