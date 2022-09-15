import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getAllEpisodeVo } from "../../api/details";
import { Details, episodeVo } from "../../models/details";
import Error from "../Error";
import EpisodeList from "./EpisodeList";
import RefList from "./RefList";
import VideoPlayer from "./VideoPlayer";

interface TopDetailsProps {
  data: Details;
}

const TopDetails: FC<TopDetailsProps> = ({ data }) => {
  const { id, type } = useParams();

  const [esp, setEsp] = useState<episodeVo>(data?.episodeVo[0]);

  const { data: espInfo, error } = useSWR(
    `watch-${id}-${type}-${esp?.id}`,
    (key: string) => esp && getAllEpisodeVo(esp, key)
  );

  const handleChangeEsp = (newEsp: episodeVo) => {
    setEsp(newEsp);
  };

  const handleCheckActive = (id: number) => {
    if (esp.id === id) {
      return `bg-blue-500`;
    }

    return `bg-[#333]`;
  };

  if (error) {
    return <Error />;
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="flex-1 aspect-video md:mr-5 mr-0 bg-[#222]">
          {espInfo && <VideoPlayer data={espInfo} />}
        </div>
        {data && <RefList data={data.refList} />}
      </div>
      <EpisodeList
        handleCheckActive={handleCheckActive}
        handleChangeEsp={handleChangeEsp}
        data={data?.episodeVo}
      />
    </>
  );
};

export default TopDetails;
