import { Product } from "../../../../interfaces";
import { ProductsListProps } from "../../../../interfaces/props";
import { Container } from "../../../../styles/GeneralStyles";
import { ProductCard } from "../../../UI/productCard/ProductCard";

export const ProductsList = ({ list }: ProductsListProps) => {
  return (
    <Container>
      {list.map(({ id, name, type, value, image }: Product) => (
        <ProductCard
          key={id}
          id={id}
          name={name}
          type={type}
          value={value}
          image={image}
        />
      ))}
    </Container>
  );
};
