import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  color: ${({ theme }) => theme.COLORS.WHITE};

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

    font-family: 'Roboto';
    font-size: 20px;
    font-weight: 700;
    line-height: 160%;
  }
`;
