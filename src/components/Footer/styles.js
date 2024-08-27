import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 7.7rem;

  padding: 2.9rem 2.8rem;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

  @media (min-width: ${DEVICE_BREAKPOINT.LG}){
    padding: 2.4rem 12.3rem;
  }

`;

export const Brand = styled.image`
      width: 12rem;
      height: 1.8rem;

    @media (min-width: ${DEVICE_BREAKPOINT.LG}){
        width: 18.6rem;
        height: 3.0rem;

    }
`;

export const Copyright = styled.div`

> span {
  color: ${({ theme }) => theme.COLORS.WHITE};

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 160%;

  @media (min-width: ${DEVICE_BREAKPOINT.LG}){
    font-size: 1.4rem;
    }
}


`;
