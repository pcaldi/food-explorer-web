import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

import bannerImg from "../../assets/banner.png";
import bannerMobile from "../../assets/banner-mobile.png";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  max-width: 112.2rem;
  width: 100%;
  height: 26rem;
  margin: 0 auto;
  padding: 0 9.5rem;

  background: ${({ theme }) => theme.COLORS.GRADIENT_100};
  border-radius: .8rem;

  margin-top: 17.2rem;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    width: 94%;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
      width: 32rem;
      height: 10rem;
      margin-top: 4.4rem;
  }
`;

export const Image = styled.div`
  background: url(${bannerImg}) no-repeat center;
  background-size: 62.0rem;

  position: absolute;
  width: 59.3rem;
  height: 41.1rem;

  bottom: -.5rem;
  left: -4.1rem;

  @media  (max-width: ${DEVICE_BREAKPOINT.MD}) {
    background-size: 42.0rem;
    bottom: -7.0rem;
    left: -10.2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    background: url(${bannerMobile}) no-repeat center;

    background-size: 12.9rem;
    width: 12.3rem;
    height: 12.9rem;
    bottom: -.4rem;
    left: -1rem;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 4.0rem;
  font-weight: 500;
  margin-bottom: .8rem;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    font-size: 1.6rem;
    margin-bottom: .3rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    font-size: 1.4rem;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 1.4rem;
  font-weight: 400;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    font-size: 1.1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    font-size: .875rem;
  }
`;
