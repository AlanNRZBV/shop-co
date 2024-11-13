import { NavLink } from 'react-router-dom';
import { icons } from '../constants';
import CustomIcon from './UI/CustomIcon';
import SearchBar from './UI/SearchBar.tsx';

const Navigation = () => {
  return (
    <nav className="mx-auto flex items-center justify-between px-4 py-5 xl:container">
      <div className="mr-10 flex">
        <CustomIcon
          src={icons.burger}
          alt="Search icon"
          height={20}
          width={20}
          className="mr-4 sm:hidden"
        />
        <NavLink to="/" className="font-IntegralCFBold text-2xl">
          SHOP.CO
        </NavLink>
      </div>
      <div className="mr-10 hidden items-center sm:flex">
        <NavLink to="/" className="mr-6 flex items-center">
          Shop&nbsp;
          <CustomIcon
            src={icons.chevronDown}
            alt="Shop unwrap"
            className="ml-1"
          />
        </NavLink>
        <NavLink to="/new" className="mr-6">
          New Arrivals
        </NavLink>
        <NavLink to="/on-sale" className="mr-6">
          On Sale
        </NavLink>
        <NavLink to="/brands">Brands</NavLink>
      </div>
      <SearchBar styleString="hidden md:flex mr-10" placeholder="Search" />
      <div className="flex">
        <CustomIcon
          src={icons.search}
          alt="Search icon"
          height={20}
          width={20}
          className="mr-3 md:hidden"
        />
        <CustomIcon
          src={icons.cart}
          alt="Cart icon"
          height={20}
          width={20}
          className="mr-3"
        />
        <CustomIcon
          src={icons.profile}
          alt="Profile icon"
          height={20}
          width={20}
          className="mr-3"
        />
      </div>
    </nav>
  );
};

export default Navigation;
