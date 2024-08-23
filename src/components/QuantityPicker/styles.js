import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;


   svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 3.2rem;
    height: 3.2rem;
  }

   button {
    background: transparent;
    border: none;
  }

   span {
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

    font-size: 2.0rem;
    font-weight: 700;
  }
`;
