import {
  Container,
  SectionSubtitle,
  SectionTitle,
} from "../../../../styles/GeneralStyles";
import FeaturedProds from "../FeaturedProducts/FeaturedProducts";
import { Featured } from "./styles";

const FeaturedProdSection = () => {
  return (
    <Container sections="section">
      <SectionTitle>FEATURED PRODUCTS</SectionTitle>
      <SectionSubtitle>BEST FROM THE BEST!</SectionSubtitle>
      <Featured>
        <FeaturedProds></FeaturedProds>
        <FeaturedProds></FeaturedProds>
        <FeaturedProds></FeaturedProds>
      </Featured>
    </Container>
  );
};

export default FeaturedProdSection;
