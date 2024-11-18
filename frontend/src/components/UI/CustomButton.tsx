import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'button'> {
  title: string;
  onClick: () => void;
  styles: string;
  icon?: string;
  iconAlt?: string;
  iconPosition?: string;
}
const CustomButton: FC<Props> = ({
  title,
  onClick,
  icon,
  iconAlt,
  iconPosition,
  styles,
  ...props
}) => {
  return (
    <button onClick={onClick} className={`rounded-full ${styles}`} {...props}>
      {icon && iconPosition === 'left' && <img src={icon} alt={iconAlt} />}
      {title}
      {icon && iconPosition === 'right' && <img src={icon} alt={iconAlt} />}
    </button>
  );
};
export default CustomButton;
