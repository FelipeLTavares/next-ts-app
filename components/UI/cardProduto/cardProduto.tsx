import { CardProdutoProps } from "../../../interfaces/props";
import {
  CardImage,
  CardImageContainer,
  CardInfo,
  Container,
  Title,
  Value,
} from "./styles";

const CardProduto = ({ id, nome, valor, imagem }: CardProdutoProps) => {
  return (
    <>
      <Container>
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

export default CardProduto;
