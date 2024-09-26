/* eslint-disable react/prop-types */
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './styles';

export function Slider({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={4}
        spaceBetween={-10}  // Define o espaço entre os slides
        loop={true}
        centeredSlides={true}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,  // Espaço entre slides no mobile
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          }
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

    </Container>
  )
}
