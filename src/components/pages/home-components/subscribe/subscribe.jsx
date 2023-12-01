import { Button, Input } from "../../../common";

export const Subscribe = () => {
  return (
    <div>
      <p className="text-twentySix text-center text-darkGrey mt-[175px] font-medium">Subscribe to get the latest news about us</p>
      <p className="text-text text-center w-[888px] mt-[24px] mb-[61px] mx-auto">
        Socielity offers insured and non-insured individuals access to
        affordable, convenient, and personalized care for urgent and ongoing
        medical conditions.
      </p>
      <div className="flex items-center rounded-[16px] w-[770px] h-[80px] p-[20px] bg-[#E6E6E6] justify-between mx-auto">
        <Input type={"text"} placeholder={"Enter your email address"} />
        <Button>Explore more</Button>
      </div>
    </div>
  );
};
