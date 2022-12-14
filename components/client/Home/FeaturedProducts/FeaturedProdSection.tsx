import { ProductProps } from "../../../../interfaces/props";
import { Container, SubTitle, Title2 } from "../../../../styles/GeneralStyles";
import { Products } from "../../../../Utils/Lists";
import { ProductCard } from "../../../UI/productCard/ProductCard";
import { Featured } from "./styles";

export const FeaturedProducts = () => {
  return (
    <Container place="section">
      <Title2>FEATURED PRODUCTS</Title2>
      <SubTitle place="section">BEST FROM THE BEST!</SubTitle>
      <Featured>
        {Products.map(({ id, name, type, value, image }: ProductProps) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            type={type}
            value={value}
            image={image}
          />
        ))}
      </Featured>
    </Container>
  );
};
