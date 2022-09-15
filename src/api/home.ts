import client from ".";
import { recommendItems } from "../models/movie";

export const getHome = async (key: string): Promise<recommendItems[]> => {
  const page = key.split("-")[1];
  const res = await client.get(`/homePage/getHome?page=${page || 0}`);
  return res.data.data.recommendItems;
};
