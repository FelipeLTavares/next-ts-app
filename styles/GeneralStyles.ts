import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: 1200,
  justifyContent: "center",
  justifyItems: "center",
  variants: {
    place: {
      section: {
        margin: "128px 0",
      },
    },
  },
});

//Titles
export const Title1 = styled("h1", {
  color: "White",
  fontSize: 50,
  margin: 10,
  zIndex: 3,
});

export const Title2 = styled("h2", {
  fontSize: 50,
  margin: 10,
  fontWeight: 200,
});

export const SubTitle = styled("h3", {
  fontWeight: 100,
  variants: {
    place: {
      outdoor: {
        color: "White",
        width: "50%",
        fontSize: 24,
        textAlign: "center",
        zIndex: 3,
      },
      section: {
        color: "Gray",
        fontSize: 14,
        letterSpacing: 3,
      },
    },
  },
});

//Text
export const Text = styled("p", {
  fontSize: 16,
  color: "Gray",
  margin: 10,
  letterSpacing: 2,
});

export const Button = styled("button", {
  width: 220,
  height: 55,
  border: "none",
  transition: "all ease 0.4s",
  "&:hover": {
    filter: "brightness(1.1)",
    borderRadius: 4,
    boxShadow: "8px 10px 16px 8px rgba(0,0,0,0.3)",
  },
  variants: {
    place: {
      header: {
        background: "Purple",
        zIndex: 3,
      },
    },
  },
});
