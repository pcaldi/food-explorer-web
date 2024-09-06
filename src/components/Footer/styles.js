import styled from "styled-components";

import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;
  height: 7.7rem;
  padding: 2.4rem 12.3rem;

  display: flex;
  gap: .8rem;
  justify-content: space-between;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    padding: 2.9rem 2.8rem;
  }

`;

export const Brand = styled.image`
    display: flex;
    align-items: center;

    width: 18.6rem;
    height: 3rem;


    @media (max-width: ${DEVICE_BREAKPOINT.LG}){
      width: 14.2rem;
      height: 1.8rem;

    }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }

   @media (max-width: ${DEVICE_BREAKPOINT.LG}){
    span {
      font-size: 1.2rem;
    }
  }
`;
