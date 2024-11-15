import { FC } from 'react';
import ProductCard from './ProductCard.tsx';

interface Props {
  title: string;
  cards: Card[];
}
const CardHolder: FC<Props> = ({ title, cards }) => {
  return (
    <div>
      <h3>{title}</h3>
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
