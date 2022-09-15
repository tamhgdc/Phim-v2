import React, { FC } from "react";
import { Details, TagList } from "../../models/details";
import TagName from "./TagName";
import { MdSportsScore } from "react-icons/md";
import { AiTwotoneCalendar } from "react-icons/ai";

interface InfoMovieProps {
  data: Details;
}

const InfoMovie: FC<InfoMovieProps> = ({ data }) => {
  return (
    <div className="mt-5">
      <div className="flex items-center mb-4 overflow-x-auto">
        {data?.tagList.map((item: TagList) => (
          <TagName key={item.id} tagName={item} />
        ))}
      </div>
      <h1 className="text-xl font-semibold mb-4">{data?.name}</h1>
      <div className="mb-4 flex items-center">
        <p className="mr-4 flex items-center">
          <MdSportsScore className="w-6 h-6 text-blue-500 mr-1" />
          {data?.score}
        </p>
        <p className="flex items-center">
          <AiTwotoneCalendar className="w-6 h-6 text-blue-500 mr-1" />
          {data?.year}
        </p>
      </div>
      <p className="text-gray-300 text-sm">{data?.introduction}</p>
    </div>
  );
};

export default InfoMovie;
