import './App.scss';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import SuscribeBtn from './components/SuscribeBtn/SuscribeBtn'
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import ContactPage from './pages/ContactPage/ContactPage';
import EventsPage from './pages/EventsPage/EventsPage';
import TastingPage from './pages/TastingPage/TastingPage';
import ButtonCompraExpres from './components/ButtonEvents/ButtonEvents';
import ButtonNuestrosCafes from './components/ButtonBuy/ButtonBuy';
import CompraExpres from './pages/CompraExpres/CompraExpres';
import AboutUs from './pages/AboutUs/AboutUs';
import OurCoffees from './pages/OurCoffees/OurCoffees';
import PrivateMeeting from './pages/PrivateMeeting/PrivateMeeting';
import ConfirmationScreen from './pages/ConfirmationScreen/ConfirmationScreen';
import AccesoriesPro from './pages/AccesoriesPro/AccesoriesPro';
import EsenciaVictoria from './pages/OurCoffees/EsenciaVictoria';
import ElBendecido from './pages/OurCoffees/ElBendecido';
import ElOrigen from './pages/OurCoffees/ElOrigen';
import SuscribePage from './pages/SuscribePage/SuscribePage';
import SuscribedPage from './pages/SuscribedPage/SuscribedPage';
import Kenia from './pages/OurCoffees/Kenia';
import Bourbon from './pages/OurCoffees/Bourbon';
import Geisha from './pages/OurCoffees/Geisha';
import Supremo from './pages/OurCoffees/Supremo';
import Serenidad from './pages/OurCoffees/Serenidad';
import Amucc from './pages/OurCoffees/Amucc';
import Relax from './pages/OurCoffees/Relax';
import Noche from './pages/OurCoffees/Noche';
import NuestrosCafes from './pages/NuestrosCafes/NuestrosCafes';
import CafesCasa from './pages/NuestrosCafes/CafesCasa';
import ChefFavorites from './pages/NuestrosCafes/ChefFavorites';
import PowerSelection from './pages/NuestrosCafes/PowerSelection';
import ColombianEsence from './pages/NuestrosCafes/ColombianEsence';
import ExclusiveRecipes from './pages/NuestrosCafes/ExclusiveRecipes';
import EcologicCoffees from './pages/NuestrosCafes/EcologicCoffees';
import Descafeinados from './pages/NuestrosCafes/Descafeinados';
import TravelWorld from './pages/NuestrosCafes/TravelWorld';
import HiddenTreasures from './pages/NuestrosCafes/HiddenTreasures';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import BackgroundMusic from './components/BackgroundMusic/BackgroundMusic';
import TotalRelax from './pages/OurCoffees/TotalRelax';
import PanamaGeisha from './pages/OurCoffees/PanamaGeisha';
import Brasil from './pages/OurCoffees/Brasil';
import PuertoRico from './pages/OurCoffees/PuertoRico';
import GoldenSunset from './pages/OurCoffees/GoldenSunset';
import Caracolillo from './pages/OurCoffees/Caracolillo';
import Nicaragua from './pages/OurCoffees/Nicaragua';
import CostaRica from './pages/OurCoffees/CostaRica';
import Hawaii from './pages/OurCoffees/Hawaii';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

function Layout() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/compra-expres" element={<CompraExpres />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path='/eventos' element={<EventsPage />} />
          <Route path='/eventos/catas' element={<TastingPage />} />
          <Route path='/quienessomos' element={<AboutUs />} />
          <Route path='/nuestroscafes' element={<NuestrosCafes />} />
          <Route path='/nuestroscafes/esenciavictoria' element={<EsenciaVictoria />} />
          <Route path='/nuestroscafes/elbendecido' element={<ElBendecido />} />
          <Route path='/nuestroscafes/elorigen' element={<ElOrigen />} />
          <Route path='/nuestroscafes/kenia' element={<Kenia />} />
          <Route path='/nuestroscafes/bourbon' element={<Bourbon />} />
          <Route path='/nuestroscafes/geisha' element={<Geisha />} />
          <Route path='/nuestroscafes/supremo' element={<Supremo />} />
          <Route path='/nuestroscafes/serenidad' element={<Serenidad />} />
          <Route path='/nuestroscafes/amucc' element={<Amucc />} />
          <Route path='/nuestroscafes/relax' element={<Relax />} />
          <Route path='/nuestroscafes/noche' element={<Noche />} />
          <Route path='/nuestroscafes/brasil' element={<Brasil />} />
          <Route path='/nuestroscafes/puertorico' element={<PuertoRico />} />
          <Route path='/nuestroscafes/goldensunset' element={<GoldenSunset />} />
          <Route path='/nuestroscafes/caracolillo' element={<Caracolillo />} />
          <Route path='/nuestroscafes/nicaragua' element={<Nicaragua />} />
          <Route path='/nuestroscafes/costarica' element={<CostaRica />} />
          <Route path='/nuestroscafes/hawai' element={<Hawaii/>} />
          <Route path='/nuestroscafes/panama' element={<PanamaGeisha />} />
          <Route path='/nuestroscafes/cafesdelacasa' element={<CafesCasa />} />
          <Route path='/nuestroscafes/reservaexclusiva' element={<ChefFavorites />} />
          <Route path='/nuestroscafes/coffeepowerselection' element={<PowerSelection />} />
          <Route path='/nuestroscafes/esenciacolombia' element={<ColombianEsence />} />
          <Route path='/nuestroscafes/recetasexclusivas' element={<ExclusiveRecipes />} />
          <Route path='/nuestroscafes/ecologicos' element={<EcologicCoffees />} />
          <Route path='/nuestroscafes/descafeinados' element={<Descafeinados />} />
          <Route path='/nuestroscafes/viajarelmundo' element={<TravelWorld />} />
          <Route path='/nuestroscafes/tesoros' element={<HiddenTreasures />} />
          <Route path='/nuestroscafes/totalrelax' element={<TotalRelax />} />
          <Route path='/eventos/reunion' element={<PrivateMeeting />} />
          <Route path='/eventos/reunion/confirmacion' element={<ConfirmationScreen />} />
          <Route path='/accesorios' element={<AccesoriesPro />} />
          <Route path='/suscribe' element={<SuscribePage />} />
          <Route path='/suscribe/confirmation' element={<SuscribedPage />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <CartProvider>
      <SimpleBar style={{ maxHeight: '100vh' }}>
        <Router>
          <div className="app">
            <Header />
            <Layout />
            <ButtonCompraExpres />
            <ButtonNuestrosCafes />
            <SuscribeBtn />
            <Cart />
          </div>
        </Router>
      </SimpleBar>
    </CartProvider>

  );
}

export default App;
