import { Button } from "../../../common";

import youtube from "/mock-imges/icons/youTube.svg";
export const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-[38px]">
      <h1 className="text-center text-[56px] mt-[125px] font-segoe-ui text-darkGrey w-[930px]">
        Your Private Online Marketplace Where{" "}
        <span className="text-blue">Socielities</span> That Comprise Your
        Personal <span className="text-blue">World</span>
      </h1>
      <p className="text-center font-segoe-ui text-text text-darkGrey w-[828px]">
        Your private online marketplace where you can trade goods and services
        with family, friends, neighbors, classmates, co-workers, and members of
        the many other communities that comprise your personal world.
      </p>
      <Button>Explore more</Button>
      <div className="flex items-center mt-[21px] gap-[5px]">
        <img src={youtube} alt="" />
        <p className="text-[14px] text-darkGrey">Let's have a look</p>
      </div>
    </div>
  );
};
