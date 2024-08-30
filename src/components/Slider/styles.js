import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakPoints";

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;  // Adicionado para garantir que não ultrapasse a largura da viewport
  margin: 0 auto;
  overflow: hidden;  // Adicionado para conter possíveis overflows

  .swiper {
    padding: 4rem 0;  // Removido padding horizontal
    overflow: visible;  // Permite que os slides fiquem visíveis fora do container
  }

  .swiper-wrapper {
    align-items: center;  // Centraliza os slides verticalmente
  }

  .swiper-slide {
    transition: all 0.3s ease;
    opacity: 0.4;
    transform: scale(0.8);
    max-width: 100%;  // Garante que o slide não seja maior que o container
  }

  .swiper-slide-active {
    opacity: 1;
    transform: scale(1.1);
    z-index: 2;
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

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINT.SM}) {
    .swiper-slide,
    .swiper-slide-active,
    .swiper-slide-prev,
    .swiper-slide-next {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
