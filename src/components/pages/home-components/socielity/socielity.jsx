import financial from "/mock-imges/icons/financial.svg";
import outscoring from "/mock-imges/icons/outsorcing.svg";
import igikai from "/mock-imges/icons/ikigai.svg";
import alchemy from "/mock-imges/icons/alchemy.svg";
import social from "/mock-imges/icons/social.svg";
import leadership from "/mock-imges/icons/leaderShip.svg";
import bring from "/mock-imges/icons/bridging.svg";
import planet from "/mock-imges/icons/planet.svg";
import testimional from "/mock-imges/testimonial.png";

import { Why } from "./why/why";

export const Socielity = () => {
  return (
    <div className=" flex flex-col items-center">
      <p className="text-darkGrey text-twentySix text-center mb-[24px] mt-[120px]">
        Why Socielity?
      </p>
      <p className="w-[743px] mx-auto text-darkGrey text-text text-center">
        Welcome to CommuniTrader.com, the private on-line marketplace where you
        are able to exchange goods and services, cash-free, in one place, 24/7,
        with a select group of individuals, organizations, and businesses that
        you know and trust.
      </p>

      <div className="flex flex-col gap-[30px] mt-[51px]">
        <div className="flex gap-[30px]">
          <Why
            icon={financial}
            title={"Financial Security"}
            text={
              "you want to keep more of your hard-earned cash in your wallet. "
            }
          />
          <Why
            icon={outscoring}
            title={"Outsourcing"}
            text={
              "you want to keep more of your hard-earned cash in your wallet. "
            }
          />
          <Why
            icon={igikai}
            title={"Ikigai"}
            text={
              "you want to keep more of your hard-earned cash in your wallet. "
            }
          />
          <Why
            icon={alchemy}
            title={"Alchemy"}
            text={
              "you want to keep more of your hard-earned cash in your wallet. "
            }
          />
        </div>
        <div className="flex gap-[30px]">
          <Why
            icon={social}
            title={" Social capital"}
            text={
              "you want to develop more beneficial relationships with others."
            }
          />
          <Why
            icon={leadership}
            title={"Leadership"}
            text={
              "you want to develop more beneficial relationships with others."
            }
          />
          <Why
            icon={bring}
            title={"Bridging Divides"}
            text={
              "you want to develop more beneficial relationships with others."
            }
          />
          <Why
            icon={planet}
            title={"Planet Earth"}
            text={
              "you want to develop more beneficial relationships with others."
            }
          />
        </div>
      </div>
      <div className="flex mt-[130px] items-center gap-[124px]">
        <div className="flex-1">
          <img src={testimional} alt="" className="mx-auto"/>
        </div>

        <div className="flex-1">
          <p className="text-text text-darkGrey">Skylar George</p>
          <p className="text-darkGrey text-[14px] mb-[19px]">Managing Director, Lovgency Company</p>
          <p className="text-darkGrey text-[20px] w-[547px]">
            “You'll want to use a format that's viewable for your potential
            leads and aligns closely with their values. To give you an idea of
            how testimonials can be portrayed, below are the different
            testimonial types that you can use to show off your customers'
            stories”
          </p>
        </div>
      </div>
    </div>
  );
};
