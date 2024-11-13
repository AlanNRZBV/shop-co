import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="mx-auto h-full sm:container">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
