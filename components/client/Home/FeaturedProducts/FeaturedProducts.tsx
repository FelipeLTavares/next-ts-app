import { CardProdutoProps } from "../../../../interfaces/props";
import {
  CardImage,
  CardImageContainer,
  CardInfo,
  Container,
  Title,
  Value,
  Hidden,
  HiddenTitle,
  HiddenValue,
  HiddenType,
} from "./styles";

const FeaturedProds = ({ id, nome, valor, imagem }: CardProdutoProps) => {
  return (
    <>
      <Container>
        <Hidden>
          <HiddenType>Type</HiddenType>
          <HiddenTitle>Title</HiddenTitle>
          <HiddenValue>R$ 000,00</HiddenValue>
        </Hidden>
        <CardImageContainer>
          <CardImage
            src="https://res.cloudinary.com/dh60zlsir/image/upload/v1650666030/loja/gawcptakrv0dfobjtd3p.jpg"
            alt="Algo"
          />
        </CardImageContainer>
        <CardInfo>
          <Title>Titulo</Title>
          <Value>R$ 0.000,00</Value>
        </CardInfo>
      </Container>
    </>
  );
};

export default FeaturedProds;
