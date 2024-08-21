import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 96px;

  padding: 24px 123px;
  display: flex;
  gap: 32px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  > button {
    max-width: 216px;
  }

`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  flex-grow: 1;

  border-radius: 5px;



  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  svg {
    color:  ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    max-width: 300px;
    border: none;
  }

`;

export const Logout = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 32px;

  display: flex;
  align-items: center;
`;
