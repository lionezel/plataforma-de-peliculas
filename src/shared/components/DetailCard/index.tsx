import { BASE_IMAGE } from "../../../const/image"

interface Props {
    title: string
    poster_path: string
}

export const DetailCard = ({title, poster_path}: Props) => {
  return (

    <>
        <div>
            <img src={BASE_IMAGE + poster_path} />
            <p>{title}</p>
        </div>
    </>
  )
}
