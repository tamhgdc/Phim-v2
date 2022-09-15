import React, { FC } from "react";
import { Details } from "../../models/details";
import GridLayout from "../Layout/GridLayout";
import MovieSlide from "../Movies";
import MovieCard from "../Movies/MovieCard";

interface LikeListProps {
  likeList: Details[];
}

const LikeList: FC<LikeListProps> = ({ likeList }) => {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold mb-4">Maybe you will like</h1>
      <MovieSlide data={likeList} />
    </div>
  );
};

export default LikeList;
