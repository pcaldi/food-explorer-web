import { styled } from "styled-components"
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 46.2rem;
  max-width: 30.4rem;

  background:  ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-radius: .8rem;
  justify-content: center;
  position: relative;

  img {
    width: 17.6rem;
    height: 17.6rem;
  }

  .btn {
    background: transparent;
    border: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    display: flex;
    width: 21.0rem;
    height: 29.2rem;
    padding: 2.4rem;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

    img {

      width: 8.8rem;
      height: 8.8rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    width: 21.0rem;
    height: 29.2rem;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;

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
    div > svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    div > svg {
      width: 1rem;
      height: 1rem;
    }
  }

`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;

     > h3 {
      margin-bottom: 0;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-family: 'Poppins';
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 140%;
    }

    div > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      width: 2.4rem;
      height: 2.4rem;
    }

   @media (max-width: ${DEVICE_BREAKPOINT.LG}) {
    display: flex;

     > h3 {
      text-align: center;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 2.4rem;

      gap: 0;
    }

    div > svg {
      width: 1rem;
      height: 1rem;

    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {


     > h3 {
      font-size: 1.2rem;
      line-height: 0;
    }

    div > svg {
      width: .875rem;
      height: .875rem;
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
      font-size: 1.6rem;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 2.4rem;

  cursor: pointer;
`;

