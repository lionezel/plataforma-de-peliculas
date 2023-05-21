import { CATEGORY } from "../../const";
import { BACKGROUND } from "../../const/image";
import { MovieType, Navbar, useMoviesQuery } from "../../shared";
import { MovieCard } from "../../shared/components/MovieCard";


export const Dashboard = () => {
  const { data, isLoading } = useMoviesQuery(CATEGORY.TOP_RATED);

  if (isLoading) return <div>loading ...</div>;

  return (
    <>
      <Navbar />
      <img src={BACKGROUND} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {data?.results?.map((movie: MovieType) => (
          <MovieCard
            key={movie.id}
            detail={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
          />
          ))}
      </div>
    </>
  );
};
