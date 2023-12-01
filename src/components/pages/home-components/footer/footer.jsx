import location from "/mock-imges/icons/location.svg";
import phone from "/mock-imges/icons/phone.svg";
import email from "/mock-imges/icons/message.svg";
import ins from "/mock-imges/icons/insta.svg";
import facebook from "/mock-imges/icons/facebook.svg";
import twitter from "/mock-imges/icons/twitter.svg";
import link from "/mock-imges/icons/link.svg";
import pin from "/mock-imges/icons/p.svg";

export const Footer = () => {
  return (
    <div className="flex justify-between bg-blue h-[336px] mt-[80px]">
      <div className="container mx-auto flex items-center text-white">
        <div className="flex gap-[250px]">
          <div className="flex flex-col gap-2">
            <p className="text-twentySix font-segoe-ui font-medium">
              Socielety
            </p>
            <p className="w-[278px]">
              Your private online marketplace where you can trade goods and
              services with family, friends, neighbors, classmates, co-workers,
              and members of the many other Socielities that comprise your
              personal world.
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-twentySix font-segoe-ui font-medium">
              Company
            </li>
            <li>help center</li>
            <li>about</li>
            <li>press</li>
            <li>blog</li>
            <li>carees</li>
            <li>faq</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-twentySix font-segoe-ui font-medium">
              Sociality
            </li>
            <li>User Agreement</li>
            <li>Privacy Policy</li>
            <li>Sociality Guidelines</li>
            <li>Cookie Policy</li>
            <li>My Account</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-twentySix font-segoe-ui font-medium">
              Contact Us
            </li>
            <li className="flex gap-2">
              <img src={email} alt="" />
              contact@example.com
            </li>
            <li className="flex gap-2">
              <img src={phone} alt="" />
              +152 534-468-854
            </li>
            <li className="flex gap-2">
              <img src={location} alt="" />
              View on Google map
            </li>
            <li className="flex gap-[18px] mt-[20px]">
              <img src={facebook} alt="" />
              <img src={link} alt="" />
              <img src={pin} alt="" />
              <img src={twitter} alt="" />
              <img src={ins} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
