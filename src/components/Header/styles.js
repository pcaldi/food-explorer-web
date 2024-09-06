import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.header`
  width: 100%;

  grid-area: header;

  padding: 2.4rem  12.3rem;
  display: flex;
  gap: 3.2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  > button {
    display: flex;
    max-width: 21.6rem;
    max-height: 4.8rem;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;
  }



/*   @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    width: 100%;
    gap: 3.2rem;
    padding: 1.6rem 8.3rem;

    > button {
     max-width: 11.6rem;
     font-size: 1rem;

    > svg {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
  } */

`;

export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 19.7rem;
    height: 3.9rem;
  }

 /*  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > img {
      width: 12.7rem;
      height: 1.9rem;
    }
  } */
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 4.8rem;

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

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: none;
  }

`;

export const Logout = styled.button`
  background: none;
  border: none;
  padding: 0;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 3.2rem;

  display: flex;
  align-items: center;

   @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    font-size: 2.4rem;
  }
`;
