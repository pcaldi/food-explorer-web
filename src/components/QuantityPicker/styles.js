import { styled } from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 9.9rem;
  gap: 1.4rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

   svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 3.2rem;
    height: 3.2rem;
  }

   button {
    background: transparent;
    border: none;
  }

   span {
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
    svg,
    span {
      font-weight: 700;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;
