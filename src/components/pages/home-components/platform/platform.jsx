import { Awards } from "./awards/awards";

import goldMedalist from '/mock-imges/goldMedalist.png';
export const Platform = () => {
  return (
    <div>
      <p className="text-twentySix text-center text-darkGrey font-medium mt-[120px] mb-[24px]">Award Winning Engagement Platform</p>
      <p className="text-darkGrey text-center w-[875px] mx-auto mb-[42px]">
        the private on-line marketplace where you are able to exchange goods and
        services, cash-free, in one place, 24/7, with a select group of
        individuals, organizations, and businesses that you know and trust.
      </p>

      <div className="flex gap-[30px] justify-center">
        <Awards img={goldMedalist} title={"Award 2021 "} text={"Winning Engagement Platform that you know and trust"}/>
        <Awards img={goldMedalist} title={"Award 2021 "} text={"Winning Engagement Platform that you know and trust"}/>
        <Awards img={goldMedalist} title={"Award 2021 "} text={"Winning Engagement Platform that you know and trust"}/>
        <Awards img={goldMedalist} title={"Award 2021 "} text={"Winning Engagement Platform that you know and trust"}/>
        <Awards img={goldMedalist} title={"Award 2021 "} text={"Winning Engagement Platform that you know and trust"}/>
        <Awards img={goldMedalist} title={"Award 2021 "} text={"Winning Engagement Platform that you know and trust"}/>
        <Awards img={goldMedalist} title={"Award 2021 "} text={"Winning Engagement Platform that you know and trust"}/>
      </div>
    </div>
  );
};
