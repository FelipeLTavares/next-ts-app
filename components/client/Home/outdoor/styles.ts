import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  height: "82vh",
  background: "LightGray",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 24,
});

export const Image = styled("img", {
  position: "absolute",
  width: "100%",
  height: "82vh",
  objectFit: "cover",
  zIndex: 1,
});

export const Title = styled("h1", {
  color: "White",
  fontSize: 60,
  zIndex: 3,
});

export const SubTitle = styled("p", {
  width: "50%",
  fontSize: 24,
  textAlign: "center",
  color: "White",
  zIndex: 3,
});
