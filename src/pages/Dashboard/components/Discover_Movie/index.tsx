import { Swiper, SwiperSlide } from "swiper/react";
import { Card, MovieType, useMoviesQuery } from "../../../../shared";
import { CATEGORY } from "../../../../const";

export const Discover_Movie = () => {
  const { data, isLoading } = useMoviesQuery(CATEGORY.DISCOVER_MOVIE);

  if (isLoading) return <div>loading ...</div>;

  return (
    <>
      <Swiper
        spaceBetween={1}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          {data?.results?.map((movie: MovieType) => (
            <SwiperSlide>
              <Card
                key={movie.id}
                detail={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
