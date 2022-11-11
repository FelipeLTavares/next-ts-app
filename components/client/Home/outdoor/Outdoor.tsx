import { Button, SubTitle, Title1 } from "../../../../styles/GeneralStyles";
import { ODContainer, Image } from "./styles";

export const Outdoor = () => {
  return (
    <>
      <ODContainer>
        <Title1>WELCOME IN OUR SHOP</Title1>
        <SubTitle place="outdoor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed
          sodales tellus, a blandit nibh.
        </SubTitle>
        <Button place="header"></Button>
        <Image src="https://i.ibb.co/N1xwVFT/959309.png" alt="Algo" />
      </ODContainer>
    </>
  );
};
