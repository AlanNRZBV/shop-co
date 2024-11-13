import { FC } from 'react';
import { roundNumber } from '../../lib/utils.ts';

interface Props {
  count: string;
  title: string;
}

const StatsItem: FC<Props> = ({ title, count }) => {
  const countToNumber = parseInt(count);

  return (
    <div className="xsPlus:last:mt-0 xsPlus:mr-6 xsPlus:pr-6 xsPlus:last:mr-0 xsPlus:last:pr-0 xsPlus:border-r xsPlus:border-gray-300 xsPlus:last:border-none flex grow-0 flex-col first:mr-6 first:border-r first:border-gray-300 first:pr-6 last:mt-3">
      <span className="font-SatoshiBold text-2xl">
        {roundNumber(countToNumber)}+
      </span>
      <span className="text-greyCustom-300 font-SatoshiRegular text-[12px]">
        {title}
      </span>
    </div>
  );
};

export default StatsItem;
