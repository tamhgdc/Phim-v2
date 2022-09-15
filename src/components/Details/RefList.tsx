import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { RefList as refList } from "../../models/details";
import { resizeImage, WIDTH_IMAGE } from "../../utils/contants";
import ImageFade from "../Shared/ImgFade";

interface RefListProps {
  data: refList[];
}

const RefList: FC<RefListProps> = ({ data }) => {
  const { id } = useParams();

  return (
    <div className="w-[300px] bg-[#222] p-4 overflow-y-auto aspect-[16/9] md:block hidden">
      {data.filter((item) => item.id !== id).length === 0 ? (
        <div className="w-full h-[calc(100%-44px)] flex items-center justify-center">
          <div>
            <img
              src="https://raw.githubusercontent.com/Ren0503/zenzen-js-share-video/master/client/src/assets/noresults.png"
              alt="no-results"
            />
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-xl font-semibold mb-4">Same series</h1>
          {data
            .filter((item) => item.id !== id)
            .map((item) => (
              <Link
                to={`/watch/${item.category}/${item.id}`}
                className="flex mb-4 last:mb-0"
              >
                <div className="aspect-[5/7] w-[80px] rounded-md overflow-hidden bg-[#333]">
                  <ImageFade
                    src={resizeImage(item.coverVerticalUrl, WIDTH_IMAGE)}
                    alt={item.name}
                  />
                </div>
                <p className="flex-1 text-sm ml-2 line-clamp-2">{item.name}</p>
              </Link>
            ))}
        </>
      )}
    </div>
  );
};

export default RefList;
