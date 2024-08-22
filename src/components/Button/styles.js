import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 5px;
  padding: 12px 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  &:disabled {
    opacity: 0.5;
  }

`;
