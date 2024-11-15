import { FC } from 'react';
interface Props {
  title: string;
}
const CustomTag: FC<Props> = ({ title, ...props }) => {
  return <span {...props}>{title}</span>;
};

export default CustomTag;
