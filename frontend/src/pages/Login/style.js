import styled from "styled-components";

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 90%;
  max-width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;

  div {
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 4px;

    input {
      width: 100%;
      height: 55px;
      padding: 5px 10px;
      border-radius: 4px;
      border-color: rgba(0,0,0,0.3)
    }

    input:hover{
        border-color: black;
    }

    input:focus{
        border-color: #1976d2;
    }

    input::placeholder {
        font-family: Roboto;
        font-size: 16px;
    }
    
  }

  button {
    width: 100%;
    height: 35px;
    color: white;
    border: 0;
    background: #1976d2;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    font-weight: 500;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    border-radius: 4px;
    cursor: pointer;
    transition: background 250ms;
  }

  button:hover {
    background: rgb(17, 82, 147);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: #1976d2;
  }
`;
