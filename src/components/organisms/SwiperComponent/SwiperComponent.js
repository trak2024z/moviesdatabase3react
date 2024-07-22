import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { StyledSwiperComponent } from './SwiperComponent.style';
import MovieItem from 'components/molecues/MovieItem/MovieItem';

const SwiperComponent = ({ title, data }) => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/movie/${id}`);
    };
    return (
        <StyledSwiperComponent>
            <h2>{title}</h2>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={2.2}
                spaceBetween={20}
                breakpoints={{
                    576: {
                        slidesPerView: 3.2,
                    },
                    768: {
                        slidesPerView: 4.3,
                    },
                    1200: {
                        slidesPerView: 5.4,
                        spaceBetween: 40,
                    },
                }}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div onClick={() => handleClick(item.id)}>
                            <MovieItem item={item} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </StyledSwiperComponent>
    );};
export default SwiperComponent;
