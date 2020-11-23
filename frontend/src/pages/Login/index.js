import { Container, Main, Wrapper, Form, Footer } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../service/api";
import Logo from "../../assets/images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await api.get("/auth", {
      auth: {
        username: email,
        password,
      },
    });
  };

  return (
    <Container>
      <Main>
        <Wrapper>
          <header>
            <img src={Logo} alt="Logo escolápios" />
          </header>
          <Form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                value={email}
                placeholder="Endereço de email *"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Senha *"
              />
            </div>

            <button type="submit">ENTRAR</button>
          </Form>
          <Footer>
            <Link to="/forgot-password">Esqueceu sua senha?</Link>
          </Footer>
        </Wrapper>
      </Main>
    </Container>
  );
};

export default Login;
