import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  width: 90%;
  max-width: 340px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid red;
`;

export const Title = styled.h1`
  font-size: 18px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
`;

export const Instruction = styled.p`
  font-size: 15px;
  text-align: justify;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const LinkButton = styled(Link)`
  background-color: #fff;
  border-color: #ccc;
  color: #333;

  &:hover {
    background-color: #e6e6e6;
    border-color: #adadad;
    color: #333;
  }
`;
