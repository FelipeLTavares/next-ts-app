import { Container, SubTitle, Title2 } from "../../../../styles/GeneralStyles";
import { FeatureContent, Features, FeatureText, FeatureTitle } from "./styles";

export const HighlightedFeatures = () => {
  return (
    <Container place="section">
      <Title2>HIGHLIGHTED FEATURES</Title2>
      <SubTitle>MAKE YOUR WORK EASIER AND FASTER!</SubTitle>
      <Features>
        <FeatureContent>
          <FeatureTitle>FREE WORLDWIDE SHIPPING</FeatureTitle>
          <FeatureText>
            Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere
            urna.
          </FeatureText>
        </FeatureContent>
        <FeatureContent>
          <FeatureTitle>FREE WORLDWIDE SHIPPING</FeatureTitle>
          <FeatureText>
            Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere
            urna.
          </FeatureText>
        </FeatureContent>
        <FeatureContent>
          <FeatureTitle>FREE WORLDWIDE SHIPPING</FeatureTitle>
          <FeatureText>
            Aliquam sit amet nibh ultrices, scelerisque lorem eget, posuere
            urna.
          </FeatureText>
        </FeatureContent>
      </Features>
    </Container>
  );
};
