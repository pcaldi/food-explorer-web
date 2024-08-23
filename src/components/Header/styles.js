import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 9.6rem;

  padding: 2.4rem 12.3rem;
  display: flex;
  gap: 3.2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  > button {
    max-width: 21.6rem;
  }

`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 19.7rem;
    height: 3.9rem;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 1.4rem;
  flex-grow: 1;

  border-radius: .5rem;



  background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  svg {
    color:  ${({ theme }) => theme.COLORS.GRAY_100};
  }

  input {
    max-width: 30.0rem;
    border: none;
  }

`;

export const Logout = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3.2rem;

  display: flex;
  align-items: center;
`;
