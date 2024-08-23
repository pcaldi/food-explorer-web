import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  height: 100vh;
  margin-inline: 15.3rem 10.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 30rem;

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
      margin-inline: 6.5rem 4.7rem;
      flex-direction: column;
      justify-content: center;

       gap: 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-inline: 6.5rem 4.7rem;

  }

`;

export const Logo = styled.div`
  display: flex;

  img {
    width: 32.4rem;
    height: 4.8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {

    img {
      width: 27.8rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {

    img {
      width: 24.8rem;
    }
}
`;

export const Form = styled.div`
  min-width: 47.6rem;
  padding: 6.4rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border-radius: 1.6rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: 'Poppins';
    font-size: 3.2rem;
    font-weight: 500;
  }

  > section input {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: .5rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;

    font-family: 'Poppins';
    font-size: 1.4rem;
    font-weight: 500;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    width: 100%;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    width: 100%;
    margin-inline: 6.5rem 4.7rem;

    h2 {
      display: none;
    }

    > section input {
      border: none;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      font-size: 1.4rem;
    }


  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    width: 100%;

    > section input {
      font-size: 1.2rem;
    }

    > button {
      font-size: 1.2rem;
    }

    a {
      font-size: 1.2rem;
    }
  }

`;
