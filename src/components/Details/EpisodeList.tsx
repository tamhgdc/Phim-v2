import React, { FC } from "react";
import { episodeVo } from "../../models/details";

interface EpisodeListProps {
  data: episodeVo[];
  handleChangeEsp: Function;
  handleCheckActive: (id: number) => string | null;
}

const EpisodeList: FC<EpisodeListProps> = ({
  data,
  handleChangeEsp,
  handleCheckActive,
}) => {
  return (
    <div className="flex items-center mt-4 overflow-x-auto">
      {data.map((item, index: number) => (
        <div
          onClick={() => handleChangeEsp(item)}
          className={`py-2 px-4 mr-2 last:mr-0 rounded-sm cursor-pointer ${handleCheckActive(
            item.id
          )}`}
          key={item.id}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
