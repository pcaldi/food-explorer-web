import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_400};


  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  margin-right: 16px;
  border-radius: 8px;
  padding-right: 16px;

 > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE}
  }

  > input {
    width: 100%;
    height: 32px;

    padding: 8px 16px;
    border: none;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE}
    }

  }

`;

