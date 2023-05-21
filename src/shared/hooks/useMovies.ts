import { useQuery } from "@tanstack/react-query";
import ax from "./useAxios";

export const useMoviesQuery = (
  category: string = "popular",
  type: string = "popular"
) =>
  useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await ax.get(`${category}`);
      return data;
    },
  });
