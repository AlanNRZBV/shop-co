import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'button'> {
  title: string;
  onClick: () => void;
}
const CustomButton: FC<Props> = ({ title, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      {title}
    </button>
  );
};
export default CustomButton;
