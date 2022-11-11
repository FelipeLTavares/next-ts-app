import Link from "next/link";
import { ProductProps } from "../../../interfaces/props";
import {
  CardImage,
  FeaturedContainer,
  Hidden,
  HiddenTitle,
  HiddenValue,
  HiddenType,
} from "./styles";

export const Product = ({ id, type, name, value, image }: ProductProps) => {
  const link = `/products/${id}`;
  return (
    <>
      <Link href={link}>
        <FeaturedContainer>
          <Hidden>
            <HiddenType>{type}</HiddenType>
            <HiddenTitle>{name}</HiddenTitle>
            <HiddenValue>{value}</HiddenValue>
          </Hidden>
          <CardImage src={image} alt={name} />
        </FeaturedContainer>
      </Link>
    </>
  );
};
