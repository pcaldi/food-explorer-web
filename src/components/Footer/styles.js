import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;
  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    width: 100%;
    display: flex;
    align-items: center;
    padding: 2rem;
    padding: 2.4rem 12.3rem;

  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}){
    gap: 19rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}){
    max-width: 42.8rem;
    gap: .8rem;
    display: flex;
    justify-content: center;
  }


`;

export const Brand = styled.image`
    display: flex;
    align-items: center;


    img {
      width: 18.6rem;
      height: 3rem;
    }


    @media (max-width: ${DEVICE_BREAKPOINT.MD}){
      img {
        width: 14.2rem;
        height: 1.8rem;
      }
    }

`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;



  > span {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: 400;

  }

   @media (max-width: ${DEVICE_BREAKPOINT.MD}){
    > span {
      font-size: 0.875rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}){
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      font-size: 0.875rem;
      min-width: 20rem;

    }
  }
`;
