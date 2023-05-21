import { CATEGORY } from "../../../const";
import { MovieType, Navbar, useMoviesQuery } from "../../../shared";
import { MovieCard } from "../../../shared/components/MovieCard";

export const Populares = () => {
  const { data, isLoading } = useMoviesQuery(CATEGORY.POPULAR);

  if (isLoading) return <div>loading ...</div>;

  return (
    <>
      <Navbar />
      <p>Populares</p>
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
