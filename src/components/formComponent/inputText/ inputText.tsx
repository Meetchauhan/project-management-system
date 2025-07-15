import { inputTextType } from "./inputTextType";

const InputText = ({
  name,
  type,
  value,
  onChange,
  placeHolder,
}: inputTextType) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
    />
  );
};

export default InputText; 
