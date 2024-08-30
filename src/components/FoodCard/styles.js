import { styled } from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 46.2rem;

  background:  ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  border-radius: .8rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.4rem;
  position: relative;

  img {
    width: 17.6rem;
    height: 17.6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    display: flex;
    width: 210px;
    height: 292px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    img {
      width: 8.8rem;
      height: 8.8rem;
    }
  }


`;

export const IconHeader = styled.button`
  position: absolute;
  top: 1.8rem;
  right: 1.6rem;

  border: none;
  background: transparent;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 2.4rem;
    height: 2.4rem;
  }

   @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;

  > h2 {
    margin: 0;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: 'Poppins';
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 140%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    width: 2.4rem;
    height: 2.4rem;
  }

   @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    > h2 {
      text-align: center;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;

      gap: 0;
    }

    > svg {
      width: 1rem;
      height: 1rem;
    }
  }

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;

    font-family: Roboto;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    text-align: center;

    font-size: 3.2rem;
    font-weight: 400;
    line-height: 160%;
  }

   @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    p {
      display: none;
    }
    span {
      font-family: 'Roboto';
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
  }

`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

   @media(max-width: ${DEVICE_BREAKPOINT.LG}) {
    display: flex;
    flex-direction: column;

    > button {
      display: flex;
      width: 16.2rem;
      height: 3.2rem;
      padding: 1.2rem 2.4rem;
      justify-content: center;
      align-items: center;
      gap: .8rem;
    }
  }

`;
