import { styled } from "@stitches/react";

export const Container = styled("div", {
  position: "relative",
  width: 390,
  height: 390,
});

export const CardImageContainer = styled("div", {
  width: "100%",
  height: 300,
});

export const CardImage = styled("img", {
  width: "100%",
  height: 300,
  objectFit: "contain",
});

export const CardInfo = styled("div", {
  width: "100%",
  height: 90,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const Title = styled("h3", {});

export const Value = styled("p", {});

export const Hidden = styled("div", {
  width: 390,
  height: 390,
  zIndex: 4,
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
  color: "transparent",
  background: "transparent",
  transition: "all ease 0.5s",
  "&:hover": {
    color: "White",
    background: "rgba(0,0,0,0.9)",
  },
});

export const HiddenType = styled("span", {
  fontSize: 16,
});

export const HiddenTitle = styled("h3", {
  fontSize: 20,
});

export const HiddenValue = styled("span", {
  fontSize: 16,
  marginTop: 32,
});
