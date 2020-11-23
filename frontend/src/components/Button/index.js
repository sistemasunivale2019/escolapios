import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 35px;
  color: white;
  border: 0;
  background: ${(props) => (props.background ? props.background : "#1976d2")};
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  border-radius: 4px;
  cursor: pointer;
  transition: background 250ms;

  &:hover {
    background: rgb(17, 82, 147);
  }
`;
