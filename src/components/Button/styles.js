import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.DARK_RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: .5rem;
  padding: 1.2rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  &:disabled {
    opacity: 0.5;
  }

`;
