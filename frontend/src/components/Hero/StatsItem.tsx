import { FC } from 'react';
import { roundNumber } from '../../lib/utils.ts';

interface Props {
  count: string;
  title: string;
}

const StatsItem: FC<Props> = ({ title, count }) => {
  const countToNumber = parseInt(count);

  return (
    <div className="flex flex-col">
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
