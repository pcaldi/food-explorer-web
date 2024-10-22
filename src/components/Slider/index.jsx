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
        slidesPerView={3}
        spaceBetween={4}  // Define o espaço entre os slides
        loop={true}
        centeredSlides={true}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
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
