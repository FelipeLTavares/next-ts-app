import { styled } from "@stitches/react";

export const Features = styled("div", {
  width: "100%",
  marginTop: 64,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyItems: "center",
});

export const FeatureContent = styled("div", {
  width: 320,
  height: 100,
});

export const FeatureTitle = styled("h4", {
  fontSize: 16,
  marginBottom: 5,
});

export const FeatureText = styled("p", {
  fontSize: 14,
  marginBottom: 5,
  color: "Gray",
});
