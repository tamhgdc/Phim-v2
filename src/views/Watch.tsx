import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { getDetails } from "../api/details";
import InfoMovie from "../components/Details/InfoMovie";
import LikeList from "../components/Details/LikeList";
import TopDetails from "../components/Details/TopDetails";
import Error from "../components/Error";
import MainLayout from "../components/Layout/MainLayout";
import MovieSlide from "../components/Movies";
import DetailSkeleton from "../components/Skeleton/DetailSkeleton";
import useInnerWidth from "../hooks/useInnerWidth";

const Watch = () => {
  const { id, type } = useParams();

  const { data, error } = useSWR(`details-${id}-${type}`, (key: string) =>
    getDetails(key)
  );

  const width = useInnerWidth();

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      <div className="text-white">
        {!data ? (
          <>
            <DetailSkeleton />
          </>
        ) : (
          <>
            {data && <TopDetails data={data} />}
            <div>{data && <InfoMovie data={data} />}</div>
            {width <= 640 && data?.refList.length > 0 && (
              <div className="mt-4">
                <h1 className="text-xl font-semibold mb-4">Same series</h1>
                <MovieSlide data={data?.refList} />
              </div>
            )}
            {data && <LikeList likeList={data.likeList} />}
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default Watch;
