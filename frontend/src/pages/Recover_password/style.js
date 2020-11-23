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
  padding: 10px;
  max-width: 340px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;
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
  justify-content: space-between;
`;

export const LinkButton = styled(Link)`
  color: rgba(0, 0, 0, 0.87);
  border: 0;
  color: black;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  background-color: #e0e0e0;
  text-decoration: none;
  width: 120px;
  height: 35px;
  transition: background 250ms;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.75;
  letter-spacing: 0.02857em;

  &:hover {
    background-color: #e6e6e6;
  }
`;
