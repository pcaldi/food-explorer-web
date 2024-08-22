import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 142px 108px 142px 153px;

  display: flex;
  align-items: center;
  justify-content: space-between;

`;

export const Logo = styled.div`
  display: flex;

  img {
    width: 324px;
    height: 48px;
  }

`;

export const Form = styled.div`
  min-width: 476px;
  padding: 64px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 16px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: 'Poppins';
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
  }

  input {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }

`;
