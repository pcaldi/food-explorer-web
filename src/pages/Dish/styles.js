import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    overflow-y: auto;
    max-width: 112.4rem;
    margin: 3.2rem auto 15.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    display: block;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    main {
      padding: 1.6rem 2.6rem;
      margin: 0;
    }
  }

`;

export const Content = styled.div`
    display: flex;
    gap: 4.7rem;
    margin-top: 4.2rem;

    img {
      width: 39rem;
      height: 39rem;
    }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;

    h1 {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 4.0rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    p {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 2.4rem;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > section {
      display: flex;
      flex-wrap: wrap;
      gap: 0.875rem;
    }
  }

  .buttons {
    display: flex;
    gap: 3.3rem;
    margin-top: 5.2rem;

    button {
      width: 11.4rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    > img {
      width: 26.3rem;
      height: 26.3rem;
    }

    > div {

      h1 {
        font-size: 2.8rem;
      }

      p {
        font-size: 1.6rem;
      }
    }

    .buttons {
      display: flex;
      gap: 0;
      margin-top: 0;

      button {
        width: 100%;
      }
    }
  }
`;

