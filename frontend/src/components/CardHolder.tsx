import { FC } from 'react';
import ProductCard from './ProductCard.tsx';

interface Props {
  title: string;
  cards: Card[];
}
const CardHolder: FC<Props> = ({ title, cards }) => {
  return (
    <div className="mt-[50px] xs:container">
      <h3 className="mb-8 text-center font-IntegralCFBold text-[32px]">
        {title}
      </h3>
      {cards.map((item) => (
        <ProductCard
          id={item.id}
          image={item.image}
          imageAlt={item.imageAlt}
          rating={item.rating}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CardHolder;
