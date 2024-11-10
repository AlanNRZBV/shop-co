import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/new">New Arrivals</NavLink>
      <NavLink to="/">Shop</NavLink>
      <NavLink to="/on-sale">On Sale</NavLink>
    </div>
  );
};

export default Navigation;
