import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: 1200,
  justifyContent: "center",
  justifyItems: "center",
  variants: {
    sections: {
      section: {
        marginTop: 128,
      },
    },
  },
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

export const SectionTitle = styled("h2", {
  fontSize: 60,
  margin: 10,
});

export const SectionSubtitle = styled("p", {
  fontSize: 20,
  color: "Gray",
  margin: 10,
  letterSpacing: 2,
});
