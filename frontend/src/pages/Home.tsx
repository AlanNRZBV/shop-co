import Hero from '../components/Hero/Hero.tsx';
import CardHolder from '../components/CardHolder.tsx';
import {
  MOCK_CATEGORIES_CARDS_DATA,
  MOCK_CATEGORIES_CARDS_LARGE_DATA,
  MOCK_NEW_ARRIVALS_DATA,
  MOCK_TOP_SELLING_DATA,
} from '../constants/mockData.ts';
import CategoriesHolder from '../components/CategoriesHolder/CategoriesHolder.tsx';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const isLg = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  return (
    <>
      <Hero />
      <CardHolder
        title="New Arrivals"
        cards={MOCK_NEW_ARRIVALS_DATA}
        link="/categories"
      />
      <CardHolder
        title="Top Selling"
        cards={MOCK_TOP_SELLING_DATA}
        link="/categories"
      />
      <CategoriesHolder
        title="Browse by dress style"
        cards={
          !isLg ? MOCK_CATEGORIES_CARDS_DATA : MOCK_CATEGORIES_CARDS_LARGE_DATA
        }
      />
      {/*<CardHolder />*/}
    </>
  );
};

export default Home;
