import { Header, Logo, Menu } from "./styles";
import { Container } from "../../../styles/GeneralStyles";
import Link from "next/link";

const MainMenu = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>LOGO</Logo>
          <Menu>
            <Link href="/">TESTE</Link>
            <Link href="/">TESTE</Link>
            <Link href="/">TESTE</Link>
            <Link href="/">TESTE</Link>
            <Link href="/">TESTE</Link>
            <Link href="/">TESTE</Link>
            <Link href="/">TESTE</Link>
            <Link href="/">TESTE</Link>
            <Link href="/">TESTE</Link>
          </Menu>
        </Header>
      </Container>
    </>
  );
};

export default MainMenu;
