import { Select } from "../../../common";

export const Faq = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-twentySix text-darkGrey mt-[120px]">Frequently Asked Questions</p>
      <p className="text-text text-center w-[888px] mt-[24px] mb-[61px]">
        In order to acquire the goods and services that will satisfy the various
        needs that you have in your life, you have six concentric circles or
        realms to explore. Beginning in the center and radiating outwards, these
        realms are:{" "}
      </p>

      <div className="flex gap-[30px]">
        <div className="flex flex-col gap-[33px]">
          <Select value={"+ General"} />
          <Select value={"+ Registration"} />
          <Select value={"+ Trade partners"} />
          <Select value={"+ My showcase"} />
        </div>
        <div className="flex flex-col gap-[33px]">
          <Select value={"+ All showcase"} />
          <Select value={"+ My account"} />
          <Select value={"+ Help"} />
          <Select value={"+ Support"} />
        </div>
      </div>
    </div>
  );
};
