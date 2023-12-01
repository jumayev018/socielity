export const Select = ({ value }) => {
  return (
    <select className="w-[570px] h-[70px] rounded-[10px] px-1 border-[1px] border-[#CACACA] outline-none text-gray-500 font-segoe-ui">
      <option>{value}</option>
    </select>
  );
};
