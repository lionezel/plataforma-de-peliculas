import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "../const";
import { Dashboard } from "../pages";
import { Populares } from "../pages/Movies/Popular";
import { Detalles } from "../shared";

const router = createBrowserRouter([

  {
    path: paths.movie.dashboard,
    element: <Dashboard />,
  },
  {
    path: paths.movie.Peliculas,
    element: <Populares />
  },
  {
    path: paths.movie.detalles,
    element: <Detalles />
  },
  { 

  },
]);

export const Navigator = () => {
  return <RouterProvider router={router} />;
};
