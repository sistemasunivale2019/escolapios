import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
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
  border: 1px solid red;
`;

export const Items = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  align-items:center;
`;
