import { Testimonial } from "../testimonial";

import test1 from "/mock-imges/know1.png";
import test2 from "/mock-imges/know2.png";

export const Know = () => {
  return (
    <div className="">
      <p className="text-darkGrey text-twentySix text-center mt-[120px] mb-[24px]">
        They love us! Do you know why?
      </p>
      <p className="text-center text-darkGrey text-text mb-[45px]">
        The following videos are currently in production. In the meantime,
        please use our Help Center.
      </p>
      <div className="flex justify-center items-center gap-[30px]">
        <Testimonial img={test1} />
        <Testimonial img={test2} />
      </div>
    </div>
  );
};
