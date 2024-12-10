import { FC } from 'react';
import CustomTag from './UI/CustomTag.tsx';
import { useNavigate } from 'react-router-dom';
import { icons } from '../constants';

const ProductCard: FC<ProductCard> = ({
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
    <div className="flex flex-col" style={{ flexBasis: 'calc(50% - 0.5rem)' }}>
      <img
        onClick={navigateTo}
        src={image}
        alt={imageAlt}
        className="max-h-[150px] rounded-xl"
      />
      <div className="flex flex-grow flex-col">
        <span className="mb-auto mt-[10px] font-SatoshiBold text-base">
          {title}
        </span>
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
        <div className="flex items-center justify-between">
          <span className="font-SatoshiBold text-xl">${price}</span>
          {oldPrice && discount && (
            <>
              <span className="font-SatoshiBold text-xl text-gray-400 line-through">
                ${oldPrice}
              </span>
              <CustomTag
                title={discount}
                styles="py-[6px] px-[14px] text-accent bg-accent bg-opacity-10 font-SatoshiMedium text-xs"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
