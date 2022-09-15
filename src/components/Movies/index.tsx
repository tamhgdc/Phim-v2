import React, { FC, useMemo } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import useInnerWidth from "../../hooks/useInnerWidth";
import "swiper/css";
import "swiper/css/navigation";

interface MovieSlideProps {
  data: any[];
}

const MovieSlide: FC<MovieSlideProps> = ({ data }) => {
  const width = useInnerWidth();

  const item = useMemo(() => {
    if (width >= 1024) {
      return 6;
    } else if (width >= 768) {
      return 4;
    } else if (width >= 640) {
      return 3;
    } else {
      return 2;
    }
  }, [width]);

  return (
    <div className="mb-8">
      <Swiper
        slidesPerView={item}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <MovieCard
              id={item?.id}
              imageUrl={item?.imageUrl || item?.coverVerticalUrl}
              category={item?.category}
              name={item?.title || item?.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlide;
