import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    justify-self: center;
    width: 100vw;

    > div {
      max-width: 40.4rem;
      margin: 4.4rem auto 2.5rem;
      margin-left: max(2.4rem, calc(100% - 40.4rem));

      header {
        max-width: 37.6rem;
        height: 12.0rem;
        margin-inline: 1.2rem 1.6rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        background: ${({ theme }) => theme.COLORS.GRADIENT_100};

        border-radius: .3rem;

        position: relative;

        img {
          width: 19.1rem;
          height: auto;
          position: absolute;
          left: -3.0rem;
          bottom: 0;
        }

        div {
          width: 20.2rem;
          position: absolute;
          top: 3.6rem;
          right: 2.1rem;
          color: ${({ theme }) => theme.COLORS.GRAY_200};

          h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 140%;
            margin-bottom: .3rem;
          }

          p {

            font-size: 1.2rem;
            line-height: 140%;
          }
        }
      }
    }
  }
  @media (min-width: ${DEVICE_BREAKPOINT.MD}) {

    > main > div {
      max-width: 72.0rem;
      margin-inline: max(2.4rem, calc((100% - 72.0rem) / 2));
    }

    > main > div header {
      max-width: 71.8rem;
    }

  }
  @media (min-width: ${DEVICE_BREAKPOINT.LG}) {
    height: 100vh;
    grid-template-rows: 9.6rem auto 7.7rem;

    > main {
      overflow-y: auto;

      > div {
        max-width: 112.2rem;
        margin: 17.2rem auto 4.8rem;
        margin-inline: max(12.3rem, calc((100% - 112.2rem) / 2));

        header {
          max-width: 112.0rem;
          height: 26.0rem;
          margin-inline: .1rem;
          border-radius: .8rem;

          img {
            width: 65.6rem;
            left: -7.0rem;
            bottom: -1.4rem;
          }

          div {
            width: 42.2rem;
            top: 8.8rem;
            right: 10.0rem;

            h1 {
              font-weight: 500;
              font-size: 4.0rem;
              margin-bottom: .8rem;
            }

            p {
              font-size: 1.6rem;
              line-height: 100%;
            }
          }
        }
      }
    }
  }
`;


export const Dishes = styled.div`
`;
