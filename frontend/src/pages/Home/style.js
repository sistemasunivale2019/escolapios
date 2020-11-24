import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
  display: flex;
  align-items:center;
  flex-direction: column;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background-color: #fff;
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid blue;
  width: 150px;

  span {
    font-weight: 700;
    font-family: Roboto, sans-serif;
  }
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 40px;
  background: #a2b747;
  max-width: 1100px;
`;

export const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items:center;

  li{
    color: #fff;
    padding: 5px;
    transition: background 250ms;
  }

  li:hover{
    background:#cadb81;
    cursor: pointer;
  }
`;
