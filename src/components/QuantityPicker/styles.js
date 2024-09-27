import { styled } from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 9.9rem;
  gap: 1.4rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

   > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 3.2rem;
    height: 3.2rem;
  }

   > button {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;
    border: none;
    margin: 0;
  }

   > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};

    font-size: 2rem;
    font-weight: 700;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    width: 100%;
    gap: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 1.6rem;
      height: 1.6rem;
    }

    > span {
      font-weight: 700;
      font-size: 1.6rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    width: 100%;
    gap: 1.4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 1.4rem;
      height: 1.4rem;
    }

    > span {
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
`;
