import { AnnouncementBar } from "./components/AnnouncementBar/AnnouncementBar";
import { FeaturedProducts } from "./components/FeaturedProducts/FeaturedProducts";
import { ForYourFace } from "./components/ForYourFace/ForYourFace";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <FeaturedProducts />
      <ForYourFace />
    </>
  );
}

export default App;
