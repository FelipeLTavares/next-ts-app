import type { AppProps } from "next/app";
import { MainMenu } from "../components/UI/mainMenu/MainMenu";
import { GlobalStyles } from "../styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  GlobalStyles();
  return (
    <>
      <MainMenu />
      <Component {...pageProps} />
    </>
  );
}
