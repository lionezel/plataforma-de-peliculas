import { Link } from "react-router-dom";
import { CardContainer, Img } from "./styles";
import { BASE_IMAGE } from "../../../const/image";

interface Props {
  title?: string;
  poster_path: string;
  detail: number;
}

export const MovieCard = ({ poster_path, title, detail }: Props) => {

  return (
    <>
      <CardContainer>
        <Link to={`/${detail}`}>
          <Img
            style={{ width: "100%", height: "100%" }}
            src={BASE_IMAGE + poster_path}
          />
          <p>{title}</p>
        </Link>
      </CardContainer>
    </>
  );
};
