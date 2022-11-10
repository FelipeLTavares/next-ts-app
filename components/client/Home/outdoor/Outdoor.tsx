import { Button } from "../../../../styles/GeneralStyles";
import { Container, Image, SubTitle, Title } from "./styles";

const Outdoor = () => {
  return (
    <>
      <Container>
        <Title>TESTES</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
          sodales tellus, a blandit nibh.
        </SubTitle>
        <Button place="header"></Button>
        <Image
          src="https://i.picsum.photos/id/234/400/400.jpg?hmac=uU8AMTXZThjcDxLOKW1IWSxUOFD9vIeo6N255d_tF-8"
          alt="Algo"
        />
      </Container>
    </>
  );
};

export default Outdoor;
