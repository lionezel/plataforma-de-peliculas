import { Navbar } from "../../shared";
import { Discover_Movie, Discover_Tv, Media_discover } from "./components";

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Media_discover />
      <p>Descubre las mejores peliculas!!!</p>
      <Discover_Movie />
      <p>Descubre las mejores series!!!</p>
      <Discover_Tv />
    </div>
  );
};
