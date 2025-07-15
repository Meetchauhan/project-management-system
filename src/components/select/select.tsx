
interface selectType {
  title: string;
  value: string;
}

interface select {
  options: selectType[];
  value: string;
  onChange: (value: string) => void;
}

const Select = ({ options, value, onChange }: select) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  
  return (
    <select
      name="select"
      id="select"
      value={value}
      className="px-2 py-1 rounded-full text-sm font-medium bg-gray-700"
      onChange={(options) => handleSelect(options)}
    >
      {options?.map((item: selectType) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
};
export default Select;
