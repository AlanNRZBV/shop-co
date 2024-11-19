import { ComponentProps, FC } from 'react';
import CategoriesCard from './CategoriesCard.tsx';

interface Props extends ComponentProps<'div'> {
  title: string;
  styles?: string;
  cards: CategoryCard[];
}

const CategoriesHolder: FC<Props> = ({ title, styles, cards, ...props }) => {
  return (
    <div
      className={`mx-4 mt-[50px] rounded-[20px] bg-greyCustom-100 px-6 pb-[27px] pt-10 sm:basis-[calc(50%-16px)] lg:px-16 lg:pb-[76px] lg:pt-[70px] ${styles}`}
      {...props}
    >
      <div>
        <h3 className="mb-7 text-center font-IntegralCFBold text-[32px] leading-9 lg:mb-16 lg:text-5xl">
          {title}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {cards.map((item, index) => (
            <CategoriesCard
              key={item.id}
              image={item.image}
              category={item.category}
              id={item.id}
              title={item.title}
              imageAlt={item.imageAlt}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesHolder;
