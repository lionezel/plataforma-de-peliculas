import { useParams } from "react-router-dom";
import { MovieType, useMoviesQuery } from "..";
import { DetailCard } from "../components/DetailCard";


export const Detalles = () => {
  const { id } = useParams();
  const { data, isLoading } = useMoviesQuery(`${id}`);
  if (isLoading) return <div>loading ...</div>;
  
  console.log(data);

  return (

    <div>
      {data?.results?.map((detail: MovieType) => (
        <DetailCard 
          title={detail.title}
          poster_path={detail.poster_path}
        />
      ))}
      
    </div>
   
  );
};
