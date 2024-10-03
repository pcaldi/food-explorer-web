import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
<<<<<<< HEAD
=======
  width: 100%;
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

    > main {
      grid-area: content;
      /* overflow-y: auto; */

      margin: 0 auto;

        > header {
          display: flex;
          flex-direction: column;
          padding-top: 4rem;
          gap: 2.4rem;

<<<<<<< HEAD

=======
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
          > h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            line-height: 140%;
            color: ${({ theme }) => theme.COLORS.GRAY_200};

          }
        }
<<<<<<< HEAD
    }

    @media (max-width: ${DEVICE_BREAKPOINT.MD}) {

          > main {
            /* max-width: 36.4rem; */
            padding: 2rem;
            gap: 2.4rem;

            > header {

              > button {
                font-size: 1.6rem;
             }

              > h1 {
                font-size: 3.2rem;
              }
            }
          }
    }

    @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
      display: block;

    }

=======


        @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
          max-width: 36.3rem;
          padding: 0 3.2rem;
          gap: 2.4rem;

          > main > header {
            padding: 0;
          }
        }

      }
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 112rem;
    height: 50rem; */
    margin: 0 auto;
    gap: 2.4rem;
    padding: 3.2rem 1rem;

  .ing-price {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
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
      width: 17.2rem;
      padding: 1.2rem 2.4rem;
      background: ${({ theme }) => theme.COLORS.LIGHT_RED};
    }
  }

   @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
<<<<<<< HEAD
    width: 100%;
    /* gap: 1.4rem; */
=======
    max-width: 90rem;
    height: 40rem;
    gap: 1.4rem;
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db

    .ing-price {
      width: 100%;
      display: flex;
      gap: 2rem;
    }

    .tags {
<<<<<<< HEAD
=======
      width: 60rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    .ing-price {
      flex-direction: column;
    }
    .tags {
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
      width: 100%;
    }
  }

<<<<<<< HEAD
  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    .ing-price {
      flex-direction: column;
      width: 100%;
    }

    .tags {
     /*  max-width: 30rem; */
     width: 100%;
    }

    .wrapper-price {
      /* min-width: 30rem; */
      width: 100%;
     /*  margin-bottom: 2.4rem; */
    }

    .btn {
      width: 100%;
      display: flex;
      justify-content: center;

      > button {
        width: 100%;
        padding: 1.2rem 3.2rem;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {

    .tags {
     /*  max-width: 30rem; */
     width: 100%;
      margin-bottom: 0;
    }

    .wrapper-price {
      width: 100%;

    }

    .btn {
      display: flex;
      justify-content: center;

      /* > button {
        min-width: 30rem;
        padding: 1.2rem 3.2rem;
      } */
    }
  }

=======
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
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
    &:focus-within {
      outline: .1rem solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
<<<<<<< HEAD
    gap: 2.4rem;

    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
=======
    gap: 2.2rem;
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db

    .name {
      width: 100%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}){
    width: 100%;
    display: flex;
    flex-direction: column;
  }
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

   @media (max-width: ${DEVICE_BREAKPOINT.LG}){
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

<<<<<<< HEAD
  @media (max-width: ${DEVICE_BREAKPOINT.MD}){
    display: flex;
    align-items: center;
    justify-content: flex-start;
=======
  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    width: 100%;
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
  }
`

export const Category = styled.div`
  width: 32.4rem;
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

  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    /* width: 30rem;
    height: 3rem; */
    display: flex;
    align-items: center;
    /* margin-bottom: 2.4rem; */

    select {
      font-size: 1rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
<<<<<<< HEAD

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
      width: 100%;

    }


=======
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db

`;


