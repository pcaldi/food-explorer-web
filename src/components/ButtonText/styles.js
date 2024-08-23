import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: transparent;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

  font-family: 'Poppins';
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

`;
