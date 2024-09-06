import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  @media (max-width: ${DEVICE_BREAKPOINT.MD}){
    width: 100%;
    height: 100%;

    grid-template-columns: auto;
  }

    > main {
      grid-area: content;
      overflow-y: auto;

      margin: 0 auto;

        > header {
          display: flex;
          flex-direction: column;
          padding-top: 4rem;
          gap: 2.4rem;

          h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.GRAY_200};

          }
        }
    /*     @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
          header {
            button {
              font-size: 2rem;
            }
            h1 {
              font-size: 2.2rem;
            }
          }
        }

        @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
          width: 100%;
          max-width: 36.3rem;
          padding: 0 3.2rem;
          gap: 2.4rem;

          > main > header {
            padding: 0;
          }
        }
         */
      }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 112rem;
    height: 50rem;
    margin: 0 auto;
    gap: 2.4rem;
    padding-top: 3.2rem;

  .ing-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tags {
    width: 82.1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: .8rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    padding: .6rem .8rem;
    border-radius: .8rem;

    &:focus-within {
      outline: .1rem solid ${({ theme }) => theme.COLORS.WHITE};
    }

    input {
      background-color: transparent;
    }
  }

  .price {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: .8rem;
    padding: 1.2rem 1.4rem;

    &:focus-within {
      outline: .1rem solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  .btn {
    display: flex;
    justify-content: flex-end;

    button {
      max-width: 17.2rem;
      padding: 1.2rem 2.4rem;
      background: ${({ theme }) => theme.COLORS.LIGHT_RED};
    }
  }

 /*  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    max-width: 90rem;
    height: 40rem;
    gap: 1.4rem;

    .ing-price {
      justify-content: flex-start;
      gap: 4rem;
    }

    .tags {
      width: 60rem;
    }
  } */

  /* @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    .ing-price {
      flex-direction: column;
    }
    .tags {
      width: 100%;
    }
  }
 */
`;

export const Items = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 3.2rem;

  section input  {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: .8rem;
  }

  .name {
    width: 46.3rem;
  }

 /*  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    gap: 2.2rem;

    .name {
      width: 26.3rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}){
    width: 100%;
    flex-direction: column;
  } */
`

export const Image = styled.div`
  padding: 1.2rem 3.2rem;
  width: 100%;
  min-width: 22.9rem;
  border-radius: .8rem;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  &:focus-within {
    outline: .1rem solid ${({ theme }) => theme.COLORS.WHITE};
  }

  > label {
    display: flex;
    gap: .8rem;
    cursor: pointer;

    svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    span {
      font-family: "Poppins", sans-serif;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    input {
      position: absolute;
      right: 0;
      z-index: -1;

      max-width: 22.9rem;
    }

    svg, span {
      transition: filter 0.2s;
    }

    &:hover {
      svg, span {
        filter: brightness(0.9);
      }
    }
  }

  /* @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    padding: .8rem 3.2rem;

    > label {

        svg {
          width: 2rem;
          height: 2rem;
        }

        span {
          font-size: 1.2rem;
        }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    width: 100%;
  } */
`

export const Category = styled.div`
  width: 36.4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > label {
    position: relative;
    width: 100%;

    select {
      border: none;
      appearance: none;
      cursor: pointer;

      width: 100%;
      padding: 1.2rem 1.6rem;
      border-radius: .8rem;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      font-weight: 400;
      font-size: 1.4rem;
      line-height: 160%;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      position: absolute;
      top: 1.2rem;
      right: 2rem;
      cursor: pointer;
      pointer-events: none;
      transition: filter 0.2s;
    }
    &:hover {
      svg {
        filter: brightness(0.9);
      }
    }
  }
/*
  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    width: 30rem;
    height: 3rem;

    select {
      font-size: 1rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  } */

`;


