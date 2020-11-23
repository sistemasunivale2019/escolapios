import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, Main, Title, ButtonGroup, LinkButton, Instruction } from "./style";

const RecoverPass = () => {
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Main>
        <Title>Redefinir senha</Title>
        <Instruction>
          Insira seu email para que possamos enviar um link para voce alterar
          sua senha.
        </Instruction>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="EMAIL *"
        />
        <ButtonGroup>
          <LinkButton to="/login">Voltar</LinkButton>
          <Button>Redefinir</Button>
        </ButtonGroup>
      </Main>
    </Container>
  );
};

export default RecoverPass;
