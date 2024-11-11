import { NavLink } from "react-router-dom";
import { icons } from "../constants";
import CustomIcon from "./UI/CustomIcon.tsx";

const Navigation = () => {
  return (
    <div>
      <CustomIcon src={icons.search} alt="Search icon" />
      <CustomIcon src={icons.cart} alt="Cart icon" />
      <CustomIcon src={icons.profile} alt="Profile icon" />
      <NavLink to="/new" className="font-SatoshiRegular">
        New Arrivals
      </NavLink>
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/on-sale">On Sale</NavLink>
    </div>
  );
};

export default Navigation;
