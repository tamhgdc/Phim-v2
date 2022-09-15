import React, { FC } from "react";
import { Link } from "react-router-dom";
import { resizeImage, WIDTH_IMAGE } from "../../utils/contants";
import ImageFade from "../Shared/ImgFade";

interface MovieCardProps {
  imageUrl: string;
  name: string;
  category: number;
  id: number;
}

const MovieCard: FC<MovieCardProps> = ({ id, category, imageUrl, name }) => {
  return (
    <Link to={category > 1 ? "#" : `/watch/${category}/${id}`}>
      <div className="w-full aspect-[5/7] rounded-md overflow-hidden bg-[#333]">
        <ImageFade src={resizeImage(imageUrl, WIDTH_IMAGE)} alt={name} />
      </div>
      <p className="mt-2 font-semibold line-clamp-1">{name}</p>
    </Link>
  );
};

export default MovieCard;
