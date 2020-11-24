import LogoItaka from "../../assets/images/itaka-logo2.png";
import { useState } from "react";
import foto from "../../assets/images/teste.jpg";
import { Backdrop } from "../../components/Backdrop";
import { Container, Nav, Avatar, Perfil, NavBar, Items } from "./style";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Backdrop show={show} />
      <Nav>
        <div style={{ width: "100px", height: "80px" }}>
          <img src={LogoItaka} alt="Logo Itaka" width="100%" height="100%" />
        </div>
        <Perfil>
          <Avatar>
            <img src={foto} alt="avatar" />
          </Avatar>
          <span>Pedro</span>
        </Perfil>
      </Nav>
      <NavBar>
        <Items>
          <li>USUÁRIOS</li>
          <li>CANDIDATOS</li>
          <li>ATIVIDADES</li>
          <li>VOLUNTÁRIOS</li>
        </Items>
      </NavBar>
    </Container>
  );
};

export default Home;
