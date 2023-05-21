import { CATEGORY } from "../../const";
import { Card, Navbar, useMoviesQuery } from "../../shared";
import { Tv } from "../../shared/interface/tv";

export const Series = () => {
  const { data, isLoading } = useMoviesQuery(CATEGORY.POPULAR_TV);

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data?.results?.map((series: Tv) => (
          <Card
            key={series.id}
            detail={series.id}
            title={series.title}
            poster_path={series.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
