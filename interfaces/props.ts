import { Product } from ".";

export interface ProductProps extends Product {}

export interface ProductsListProps {
  list: Product[];
}
