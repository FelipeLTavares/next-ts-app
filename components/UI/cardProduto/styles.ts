import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: 390,
  height: 390,
  margin: 20,
  transition: "all ease 0.4s",
  "&:hover": {
    borderRadius: 4,
    boxShadow: "8px 10px 16px 8px rgba(0,0,0,0.3)",
  },
});

export const CardImageContainer = styled("div", {
  width: 250,
  height: 320,
});

export const CardImage = styled("img", {
  width: 250,
  height: 320,
  objectFit: "contain",
});

export const CardInfo = styled("div", {
  width: 250,
  height: 80,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
});

export const Title = styled("h3", {});

export const Value = styled("p", {});
