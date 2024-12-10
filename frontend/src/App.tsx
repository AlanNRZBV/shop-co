import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="mx-auto h-full">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
