import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
`;
