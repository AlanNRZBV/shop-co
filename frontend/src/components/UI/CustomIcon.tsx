import { FC } from "react";

interface Props {
  src: string;
  alt: string;
  onClick?: () => void;
}

const CustomIcon: FC<Props> = ({ src, onClick, alt, ...props }) => {
  return <img src={src} alt={alt} onClick={onClick} {...props} />;
};

export default CustomIcon;
