import { FC } from 'react';
import CustomTag from './UI/CustomTag.tsx';
import { useNavigate } from 'react-router-dom';
import { icons } from '../constants';

const ProductCard: FC<Card> = ({
  discount,
  id,
  image,
  oldPrice,
  price,
  rating,
  title,
  imageAlt,
}) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/product/${id}`);
  };
  const ratingParsed = parseFloat(rating);
  const ratingRounded = Math.floor(ratingParsed);
  const isHalf = ratingParsed % 1 === 0.5;

  return (
    <div className="flex flex-col">
      <img
        onClick={navigateTo}
        src={image}
        alt={imageAlt}
        className="h-[200px] w-[200px] rounded-xl"
      />
      <span className="mt-[10px] font-SatoshiBold text-base">{title}</span>
      <div className="my-1 flex">
        {[...Array(ratingRounded)].map((_, index) => (
          <img
            key={index}
            src={icons.ratingStar}
            alt="rating"
            className="h-[16px] w-[16px]"
          />
        ))}
        {isHalf && (
          <img
            src={icons.ratingHalfStar}
            alt="rating"
            className="h-[16px] w-[8px]"
          />
        )}
        <div className="ml-3 font-SatoshiRegular text-xs">
          <span>{rating}</span>
          <span className="text-gray-500">/5</span>
        </div>
      </div>
      <span className="font-SatoshiBold text-xl">${price}</span>
      {oldPrice && discount && (
        <div>
          <span>{oldPrice}</span>
          <CustomTag title={discount} />
        </div>
      )}
    </div>
  );
};

export default ProductCard;
