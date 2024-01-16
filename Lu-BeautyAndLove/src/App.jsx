import CarrouselBanner from "./components/ImageBanner";
import Header from "./components/Header";
import MarkBanner from "./components/MarkBanner";
import PerfumeLayerOne from "./components/PerfumeLayerOne";
import products from "./data/data.json";
function App() {
  return (
    <>
      <Header />
      <MarkBanner />
      <CarrouselBanner />
      <PerfumeLayerOne products={products} />
    </>
  );
}

export default App;
