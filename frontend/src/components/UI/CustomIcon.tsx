import { ComponentProps, FC } from 'react';

interface Props extends ComponentProps<'img'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

const CustomIcon: FC<Props> = ({
  src,
  onClick,
  alt,
  width,
  height,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      onClick={onClick}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default CustomIcon;
