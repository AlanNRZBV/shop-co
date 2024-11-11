import { ComponentProps, FC } from 'react';
import CustomIcon from './CustomIcon.tsx';
import { icons } from '../../constants';

interface Props extends ComponentProps<'div'> {
  placeholder: string;
  styleString?: string;
  onSearch?: () => void;
}

const SearchBar: FC<Props> = ({ placeholder, styleString, ...props }) => {
  return (
    <div
      className={`flex grow rounded-full bg-greyCustom-100 p-4 ${styleString}`}
      {...props}
    >
      <CustomIcon
        src={icons.searchBarGrey}
        alt="Search icon"
        height={20}
        width={20}
        className="mr-3"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="placeholder-greyCustom-300 mr-4 bg-greyCustom-100 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
