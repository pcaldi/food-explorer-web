import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: .5rem;

  > input {
    height: 4.8rem;
    width: 100%;

    padding: 1.2rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    svg {
      width: 1.8rem;
      height: 1.8rem;
    }

    > input {
      height: 3.8rem;
      padding: 1rem 1.2rem;

      &::placeholder {
        font-size: 1.2rem;
      }

    }
  }

`;
