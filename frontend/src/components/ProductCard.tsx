import { FC } from 'react';
import CustomTag from './UI/CustomTag.tsx';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>
      <img onClick={navigateTo} src={image} alt={imageAlt} />
      <span>{title}</span>
      <span>{rating}</span>
      <span>{price}</span>
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
