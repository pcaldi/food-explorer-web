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
<<<<<<< HEAD
        slidesPerView={4}
        spaceBetween={-10}  // Define o espaço entre os slides
=======
        slidesPerView={3}
        centeredSlides={true}
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
        loop={true}
        centeredSlides={true}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 0.5,
            spaceBetween: -60  // Define o espaço entre os slides

          },
          480: {
            slidesPerView: 1,
          },
          768: {
<<<<<<< HEAD
            slidesPerView: 2,
=======
            slidesPerView: 3,
>>>>>>> 62dd28a760fc8950cb391fb6e2d8f90ae65487db
          },
          1024: {
            slidesPerView: 4,
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
