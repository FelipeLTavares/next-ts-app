import { Header, Logo, Menu } from "./styles";
import { Container } from "../../../styles/GeneralStyles";
import Link from "next/link";

export const MainMenu = () => {
  return (
    <>
      <Header>
        <Logo>LOGO</Logo>
        <Menu>
          <Link href="/">TESTE</Link>
          <Link href="/">TESTE</Link>
          <Link href="/">TESTE</Link>
          <Link href="/">TESTE</Link>
        </Menu>
      </Header>
    </>
  );
};
