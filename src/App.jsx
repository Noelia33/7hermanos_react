import './styles/global.css';

import Header     from './components/Header/Header';
import Hero       from './components/Hero/Hero';
import Carta      from './components/Carta/Carta';
import Menus      from './components/Menus/Menus';
import Vinos      from './components/Vinos/Vinos';
import Historia   from './components/Historia/Historia';
import Reservar   from './components/Reservar/Reservar';
import Galeria    from './components/Galeria/Galeria';
import Ubicacion  from './components/Ubicacion/Ubicacion';
import Footer     from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Carta />
        <Menus />
        <Vinos />
        <Historia />
        <Reservar />
        <Galeria />
        <Ubicacion />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
