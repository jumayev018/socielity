export const Awards = ({ img, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-evenly p-[18px] w-[170px] h-[239px] rounded-[16px] bg-white shadow-lg shadow-[#e879f9] hover:scale-125 transition-all">
      <img src={img} alt="" />
      <p className="mt-[28px] text-blue text-[20px]">{title}</p>
      <p className="w-[141px] text-center text-[14px] mt-[9px] text-darkGrey">
        {text}
      </p>
    </div>
  );
};
