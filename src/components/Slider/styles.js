import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  max-width: 100vw;  // Adicionado para garantir que não ultrapasse a largura da viewport
  margin: 0 auto;
  overflow: hidden;  // Adicionado para conter possíveis overflows

  .swiper {
    padding: 1rem 0;  // Removido padding horizontal
    overflow: visible;  // Permite que os slides fiquem visíveis fora do container
  }

  .swiper-wrapper {
    align-items: center;  // Centraliza os slides verticalmente
  }

  .swiper-slide {
    transition: all 0.3s ease;
    opacity: 0.4;
    transform: scale(0.8);
    width: 25rem;
  }

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1.1);
    z-index: 2;
    width: 25rem;
  }

  .swiper-slide-prev,
  .swiper-slide-next {
    opacity: 0.7;
    transform: scale(0.9);

  }

  .swiper-pagination-bullet {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    opacity: 0.5;
  }


  .swiper-pagination-bullet-active {
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    opacity: 1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.GRAY_300};

  }

  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 60px;
  }

  @media (max-width: ${DEVICE_BREAKPOINT.XS}) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;

    }

  }

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    .swiper-slide,
    .swiper-slide-active,
    .swiper-slide-prev,
    .swiper-slide-next {
      opacity: 1;
      transform: scale(1);
      display: flex;
      justify-content: center;
    }
    .swiper-button-next:after,
    .swiper-button-prev:after {
     font-size: 2.8rem;
    }

    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

  }
`;
