import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 55px;
  padding: 5px 10px;
  border-radius: 4px;
  border-color: rgba(0, 0, 0, 0.3);

  &:hover {
    border-color: black;
  }

  &:focus {
    border-color: #1976d2;
  }

  &::placeholder {
    font-family: Roboto;
    font-size: 16px;
  }
`;
