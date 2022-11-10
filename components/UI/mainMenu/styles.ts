import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  height: "8vh",
  display: "grid",
  gridTemplateColumns: 1200,
  justifyContent: "center",
  alignContent: "center",
});

export const Header = styled("header", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Logo = styled("div", {
  fontSize: 32,
});

export const Menu = styled("nav", {
  height: "8vh",
  display: "flex",
  alignItems: "center",
  transition: "all ease 0.4s",
  a: {
    fontSize: 16,
    textDecoration: "none",
    padding: 16,
    color: "Black",
    "&:hover": {
      opacity: 0.5,
    },
  },
});
