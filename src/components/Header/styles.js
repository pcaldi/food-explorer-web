import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.header`
  width: 100%;
  grid-area: header;

  padding: 2.4rem  12.3rem;
  display: flex;
  align-items: center;
  gap: 3.2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  .btn {
    display: flex;
    max-width: 21.6rem;
    max-height: 4.8rem;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem
  }

  .fav {
    display: flex;
    align-items: center;

    > button {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
      width: 100%;
      gap: 2rem;
      padding: 2.4rem 3rem;

    > .fav {
      button {
        font-size: 1.4rem;
      }
    }

    > .btn {
      > button {
        font-size: 1rem;
        height: 2rem;
        padding: 2rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
      gap: 2rem;
      padding: 2.4rem 3rem;

    > .fav {
      button {
        font-size: 1.4rem;
      }
    }

    > .btn {
      > button {
        font-size: 1rem;
        height: 2rem;
        padding: 2rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
      /* min-width: 42.8rem; */
      padding: 2.4rem 3rem;

    > .fav {
      button {
        display: none;
      }
    }

    > .btn {
      > button {
        display: none;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
      /* max-width: 42.8rem;
      max-height: 11.4rem; */
      gap: 2rem;
      padding: 2.4rem 3rem;

    > .fav {
      button {
        display: none;
      }
    }

    > .btn {
      > button {
        display: none;
      }
    }
  }
`;


export const Brand = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 19.7rem;
    height: 3.9rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    > img {
      width: 14.7rem;
      height: 2.9rem;
    }
  }

   @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    > img {
      width: 12.7rem;
      height: 1.9rem;
    }
  }
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

   @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    input {
      font-size: 1.4rem;
    }

  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
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

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    svg {
      font-size: 2.5rem;
    }
  }


  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    svg {
      font-size: 1.8rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    svg {
      display: none;
    }
  }
`;

export const Menu = styled.button`
  background: transparent;
  border: none;

  svg {
    display: none;
  }

`;
