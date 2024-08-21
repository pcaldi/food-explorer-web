import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  border-radius: 8px;
  border: none;
  resize: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  }

`;
