import CustomButton from '../UI/CustomButton.tsx';
import StatsItem from './StatsItem.tsx';

const MOCK_STAT_DATA = [
  {
    count: '277+',
    title: 'International Brands',
  },
  {
    count: '2345+',
    title: 'High-Quality Products',
  },
  {
    count: '30634+',
    title: 'Happy Customers',
  },
];
const Hero = () => {
  const mockFn = () => {};

  return (
    <div className="bg-greyCustom-400 mx-auto pt-10 xs:container">
      <div className="flex flex-col">
        <span className="mb-5 font-IntegralCFBold text-4xl capitalize">
          find clothes that match your style
        </span>
        <span className="text-greyCustom-300 mb-6 text-sm">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </span>
        <CustomButton
          title="Shop Now"
          onClick={mockFn}
          className="mb-5 rounded-full bg-black py-4 text-white"
        />
      </div>
      {MOCK_STAT_DATA.map((item, index) => (
        <StatsItem key={index} count={item.count} title={item.title} />
      ))}
      <div>brands here</div>
    </div>
  );
};

export default Hero;
