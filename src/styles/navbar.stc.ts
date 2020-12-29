import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 10vh;

  .wrapper {
    width: 90%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Brand = styled.div`
  flex: 1;
  a {
    color: #0abfdc;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 5;

  a {
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 3px;
    color: #303030;
    margin-right: 30px;
  }
`;

export const AuthLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;

  a {
    margin-right: 10px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #303030;
  }
`;
