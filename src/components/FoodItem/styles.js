import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.GRAY_400};


  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: .8rem;

 > button {
    border: none;
    background: none;

    display: flex;
    align-items: center;

    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE};

    > svg {
      margin-right: .4rem;
    }

  }

  > input {
    width: 11.8rem;
    height: 3.2rem;

    padding: 1.0rem 1.6rem;
    border: none;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_300 : theme.COLORS.WHITE}
    }

  }

`;

