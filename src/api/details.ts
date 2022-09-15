import client from ".";
import {
  Details,
  episodeVo,
  mediaLink,
  ResultMedia,
  subtitlingList,
} from "../models/details";

export const getDetails = async (key: string): Promise<Details> => {
  const type = key.split("-")[2];
  const id = key.split("-")[1];
  const res = await client.get(`/movieDrama/get?id=${id}&category=${type}`);
  return res.data.data;
};

export const getEpisodeVo = async (
  idE: number,
  quanlity: string,
  idMovie: string,
  type: string
): Promise<mediaLink> => {
  const res = await client.get(
    `/media/previewInfo?category=${type}&contentId=${idMovie}&episodeId=${idE}&definition=${quanlity}`
  );
  return res.data.data;
};

export const getAllEpisodeVo = async (
  esp: episodeVo,
  key: string
): Promise<{ result: ResultMedia[]; subtitle: subtitlingList[] }> => {
  const idMovie = key.split("-")[1];
  const type = key.split("-")[2];
  const res = await Promise.all(
    esp.definitionList.map(
      async (item) => await getEpisodeVo(esp.id, item.code, idMovie, type)
    )
  );

  const result = res.map((item, index: number) => ({
    ...item,
    quanlity: esp.definitionList[index].description,
    id: esp.id,
  }));

  return {
    result,
    subtitle: esp.subtitlingList,
  };
};
