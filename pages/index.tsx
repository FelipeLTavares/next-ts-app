import { HighlightedFeatures } from "../components/client/Home/featuredHighlights/HighlightedFeatures";
import { FeaturedProducts } from "../components/client/Home/featuredProducts/FeaturedProdSection";
import { Outdoor } from "../components/client/Home/outdoor/Outdoor";

export default function Home() {
  return (
    <>
      <Outdoor />
      <FeaturedProducts />
      <HighlightedFeatures />
    </>
  );
}
