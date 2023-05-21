import { Swiper, SwiperSlide } from "swiper/react";
import { Card, MovieType, useMoviesQuery } from "../../../../shared";
import { CATEGORY } from "../../../../const";

export const Discover_Tv = () => {
  const { data, isLoading } = useMoviesQuery(CATEGORY.DISCOVER_TV);

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
          {data?.results?.map((descover: MovieType) => (
            <SwiperSlide>
              <Card
                key={descover.id}
                detail={descover.id}
                title={descover.title}
                poster_path={descover.poster_path}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
