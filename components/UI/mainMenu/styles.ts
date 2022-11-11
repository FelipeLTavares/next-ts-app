import { styled } from "@stitches/react";

export const Header = styled("header", {
  width: "100%",
  height: "8vh",
  display: "grid",
  gridTemplateColumns: "600px 600px",
  justifyContent: "center",
  alignItems: "center",
});

export const Logo = styled("div", {
  fontSize: 32,
});

export const Menu = styled("nav", {
  height: "8vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
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
