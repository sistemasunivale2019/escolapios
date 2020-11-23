import GlobalStyle from "./styles/GlobalStyle";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import RecoverPassword from "./pages/Recover_password";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={RecoverPassword} />
      </Switch>
    </>
  );
}

export default App;
