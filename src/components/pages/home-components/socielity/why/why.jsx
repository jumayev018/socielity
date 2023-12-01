export const Why = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[270px] h-[267px] bg-[#F6F7FD] rounded-btn px-[11px] gap-[12px] hover:scale-110 transition-all">
      <img src={icon} alt="" />
      <p className="text-center">{title}</p>
      <p className="text-center">{text}</p>
    </div>
  );
};
