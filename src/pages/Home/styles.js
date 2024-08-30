import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;

  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
      grid-area: content;
      max-width: 100vw;
      min-height: 74.2vh;
      overflow-x: hidden;
    }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    grid-template-rows: auto 1fr auto;
  }
`;


export const Dishes = styled.div`
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  max-width: 100vw;

  > section h2 {
    margin-bottom: 1.6rem;
    font-size: 2.4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    padding: 1.6rem;

    > section h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    padding: 1.2rem;

    > section h2 {
      font-size: 1.8rem;
    }
  }
`;


