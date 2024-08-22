import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;


   svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 32px;
    height: 32px;
  }

   button {
    background: transparent;
    border: none;
  }

   span {
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

    font-size: 20px;
    font-weight: 700;
  }
`;
