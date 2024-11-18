import { ComponentProps, FC } from 'react';
interface Props extends ComponentProps<'span'> {
  title: string;
  styles: string;
}
const CustomTag: FC<Props> = ({ title, styles, ...props }) => {
  return (
    <span className={`rounded-full ${styles}`} {...props}>
      {title}%
    </span>
  );
};

export default CustomTag;
