import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import ProductCard from './ProductCard.tsx';
import CustomButton from './UI/CustomButton.tsx';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  cards: Card[];
  link: string;
}
const CardHolder: FC<Props> = ({ title, cards, link }) => {
  const isXs = useMediaQuery({
    query: '(max-width: 639px)',
  });
  const isMd = useMediaQuery({
    query: '(min-width: 640px) and (max-width: 849px)',
  });
  const navigate = useNavigate();

  const displayedCards = isXs
    ? cards.slice(0, 2)
    : isMd
      ? cards.slice(0, 3)
      : cards.slice(0, 4);

  return (
    <div className="mt-[50px] flex flex-col xs:container">
      <h3 className="mb-8 text-center font-IntegralCFBold text-[32px]">
        {title}
      </h3>
      <div className="flex justify-center xs:gap-x-4">
        {displayedCards.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            image={item.image}
            imageAlt={item.imageAlt}
            rating={item.rating}
            title={item.title}
            price={item.price}
            discount={item.discount}
            oldPrice={item.oldPrice}
          />
        ))}
      </div>
      <CustomButton
        title="View All"
        onClick={() => {
          navigate(link);
        }}
        styles="border border-greyCustom-100 py-3 mt-6 xsPlus:self-center xsPlus:px-14"
      />
    </div>
  );
};

export default CardHolder;
