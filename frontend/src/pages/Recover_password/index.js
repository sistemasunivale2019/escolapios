import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {
  Container,
  Main,
  Title,
  ButtonGroup,
  LinkButton,
  Instruction,
} from "./style";

const RecoverPass = () => {
  const [email, setEmail] = useState("");
  const [enviouEmail, setEnviouEmail] = useState(false);

  const sendEmailHandler = () => setEnviouEmail(true);

  return (
    <Container>
      <Main>
        <Title>Redefinir senha</Title>
        <Instruction>
          Insira seu email para que possamos enviar um link para voce alterar
          sua senha.
        </Instruction>
        {!enviouEmail ? (
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL *"
          />
        ) : (
          <Instruction>
            Email enviado! Dentro de alguns instantes você recebera um email com
            as instruções para alterar sua senha!{" "}
          </Instruction>
        )}
        <ButtonGroup>
          <LinkButton to="/login">Voltar</LinkButton>
          <Button
            width="120px"
            onClick={sendEmailHandler}
            disabled={enviouEmail}
          >
            Enviar
          </Button>
        </ButtonGroup>
      </Main>
    </Container>
  );
};

export default RecoverPass;
