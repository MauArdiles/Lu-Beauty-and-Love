import CarrouselBanner from "./components/ImageBanner";
import { NavBar } from "./components/NavBar";
import MarkBanner from "./components/MarkBanner";
import PerfumeLayerOne from "./components/Dorgeval/PerfumeLayerOne";
import SetsLayer from "./components/Sets/SetsLayer";
import BaguesLayer from "./components/Bagues/BaguesLayer";
import OpiBanner from "./components/OPI/OpiBanner";
import OpiProducts from "./components/OPI/OpiProducts";
import CromaLayer from "./components/Maquillaje/CromaLayer";
import PatagoniaLayer from "./components/Patagonia/PatagoniaLayer";
import BeautySpaLayer from "./components/SandraMarzzan/BeautySpaLayer";
import Footer from "./components/Footer";
import { Whatsapp } from "./components/Whatsapp";

function App() {
  return (
    <>
      <NavBar />
      <MarkBanner />
      <CarrouselBanner />
      <Whatsapp />
      <PerfumeLayerOne />
      <SetsLayer />
      <BaguesLayer />
      <OpiBanner />
      <OpiProducts />
      <CromaLayer />
      <PatagoniaLayer />
      <BeautySpaLayer />
      <Footer />
    </>
  );
}

export default App;
