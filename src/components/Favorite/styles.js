import styled from "styled-components";

export const Container = styled.div`
  min-width: 23.1rem;
  min-height: 7.2rem;
  display: flex;
  padding: 1.6rem 0;
  align-items: center;
  gap: 1.3rem;

  img {
    width: 10rem;
    height: 10rem;
  }

`;

export const Content = styled.div`


  h2 {
    font-family: Poppins;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 160%;
  }
  button {
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_RED};
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
  }

`;
