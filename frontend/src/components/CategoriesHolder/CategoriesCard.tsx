import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const CategoriesCard: FC<CategoryCard> = ({
  title,
  image,
  imageAlt,
  category,
  index,
}) => {
  const isLg = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  const navigate = useNavigate();

  const t = isLg && index! > 0 && index! < 3 ? 'col-span-2' : '';

  return (
    <div
      onClick={() => {
        navigate(`/category/${category}`);
      }}
      className={`relative flex grow overflow-hidden rounded-[20px] bg-white ${t} lg:h-[289px]`}
    >
      <img
        src={image}
        alt={imageAlt}
        className={`ml-auto max-h-[289px] object-none`}
      />
      <span className="absolute left-6 top-4 font-SatoshiBold text-2xl">
        {title}
      </span>
    </div>
  );
};

export default CategoriesCard;
