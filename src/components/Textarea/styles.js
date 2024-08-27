import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  min-height: 17.2rem;

  border-radius: .8rem;
  border: none;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  &:focus {
    border: .1rem solid ${({ theme }) => theme.COLORS.WHITE};
  }

`;
