import { Button } from "../../../common";

export const Services = ({ isReversed, title, img, text }) => {
  return isReversed ? (
    <div className="w-[1200px] flex mt-[157px] items-center gap-[25px]">
      <div className="flex-1">
        <div className="flex flex-col items-start gap-[24px]">
          <p className="text-darkGrey text-twentySix">{title}</p>
          <p className="text-darkGrey text-text">{text}</p>
          <Button>Explore more</Button>
        </div>
      </div>
      <div className="flex-1">
        <img src={img} alt="" />
      </div>
    </div>
  ) : (
    <div className="w-[1200px] mx-auto flex mt-[157px] items-center gap-[25px]">
      <div className="flex-1">
        <img src={img} alt="" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col items-start gap-[24px]">
          <p className="text-darkGrey text-twentySix">{title}</p>
          <p className="text-darkGrey text-text">{text}</p>
          <Button>Explore more</Button>
        </div>
      </div>
    </div>
  );
};
