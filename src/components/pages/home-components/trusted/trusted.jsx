import { Partners } from "../partners/partners";
import { Services } from "../services";

import service1 from "/mock-imges/services.png";
import service2 from "/mock-imges/services2.png";
import service3 from "/mock-imges/services3.png";
export const Trusted = () => {
  return (
    <div className=" flex flex-col items-center">
      <p className="text-darkGrey text-twentySix mt-[117px] mb-[20px]">
        Trusted By
      </p>
      <p className="w-[875px] text-text text-darkGrey mb-[46px] text-center">
        The private on-line marketplace where you are able to exchange goods and
        services, cash-free, in one place, 24/7, with a select group of
        individuals, organizations, and businesses that you know and trust.
      </p>
      <Partners />
      <Services
        title={
          "You want to strengthen more of communities or groups you are associated with."
        }
        text={
          "A simple definition is that leadership is the art of motivating a group of people to act towards achieving a common goal. In a business setting, this can mean directing workers and colleagues with a strategy to meet the company's needs."
        }
        img={service1}
      />
      <Services
        title={
          "You want to strengthen more of communities or groups you are associated with."
        }
        text={
          "A simple definition is that leadership is the art of motivating a group of people to act towards achieving a common goal. In a business setting, this can mean directing workers and colleagues with a strategy to meet the company's needs."
        }
        img={service2}
        isReversed={true}
      />{" "}
      <Services
        title={
          "You want to strengthen more of communities or groups you are associated with."
        }
        text={
          "A simple definition is that leadership is the art of motivating a group of people to act towards achieving a common goal. In a business setting, this can mean directing workers and colleagues with a strategy to meet the company's needs."
        }
        img={service3}
      />
    </div>
  );
};
