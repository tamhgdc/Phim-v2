import client from ".";
import { SearchAvandedResults } from "../models/search";

export const getMovieCategories = async (
  key: string
): Promise<SearchAvandedResults[]> => {
  const res = await client.post("/search/v1/search", {
    size: 26,
    params: "",
    category: key.split("-")[1],
    sort: key.split("-")[2],
  });
  return res.data.data.searchResults;
};
