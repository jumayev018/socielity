import { Button } from "../../../common";

export const Navbar = () => {
  return (
    <div className="flex p-[18px] items-center justify-between">
      <p className="text-[36px] text-blue font-segoe-ui font-medium">
        Socielity
      </p>

      <ul className="flex gap-[60px] items-center text-text text-darkGrey">
        <li>Socielity</li>
        <li>Resource</li>
        <li>Platform</li>
        <li>Support</li>
        <li>Login</li>
        <li>
          <Button>Explore more</Button>
        </li>
      </ul>
    </div>
  );
};
