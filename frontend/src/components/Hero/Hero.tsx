import CustomButton from '../UI/CustomButton.tsx';
import StatsItem from './StatsItem.tsx';
import { images } from '../../constants';
import { useNavigate } from 'react-router-dom';

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

const BRANDS = [
  { url: images.versaceLogoWhite, alt: 'versace logo' },
  { url: images.zaraLogoWhite, alt: 'zara logo' },
  { url: images.pradaLogoWhite, alt: 'prada logo' },
  { url: images.gucciLogoWhite, alt: 'gucci logo' },
  { url: images.ckLogoWhite, alt: 'ck logo' },
];
const Hero = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate('/categories');
  };
  return (
    <div className="bg-greyCustom-400">
      <div className="mx-auto pt-10 xs:container">
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
            onClick={handler}
            styles="mb-5 rounded-full bg-black py-4 text-white"
          />
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center">
          {MOCK_STAT_DATA.map((item, index) => (
            <StatsItem key={index} count={item.count} title={item.title} />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <img src={images.heroSmall} alt="two models" />
        <div className="flex flex-wrap items-stretch justify-center gap-[20px] bg-black px-4 py-10">
          {BRANDS.map((item, index) => (
            <img
              key={index}
              className="[&:nth-last-child(-n+3)]:border-red"
              src={item.url}
              alt={item.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
