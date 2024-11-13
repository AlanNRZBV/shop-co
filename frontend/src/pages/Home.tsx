import Hero from '../components/Hero/Hero.tsx';
import CardHolder from '../components/CardHolder.tsx';
import Carousel from '../components/Carousel.tsx';

const Home = () => {
  return (
    <>
      <Hero />
      <CardHolder />
      <CardHolder />
      <CardHolder />
      <Carousel />
    </>
  );
};

export default Home;
