import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";
import { getMovieCategories } from "../api/categories";
import Error from "../components/Error";
import GridLayout from "../components/Layout/GridLayout";
import MainLayout from "../components/Layout/MainLayout";
import MovieCard from "../components/Movies/MovieCard";
import HomePageSkeleton from "../components/Skeleton/HomePageSkeleton";
import SlideSkeleton from "../components/Skeleton/SlideSkeleton";

const Categories = () => {
  const { id, name } = useParams();

  const getKey = (pageIndex: any, previousPageData: any) => {
    if (previousPageData && previousPageData.length === 0) return null;
    return `categories-${id}-${previousPageData?.slice(-1)?.[0]?.sort || ""}`;
  };

  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key: string) => {
      return getMovieCategories(key);
    },
    { revalidateFirstPage: false }
  );

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      <button onClick={() => setSize((size) => size + 1)}>Test</button>
      <div className="text-white">
        <div>
          {!data ? (
            <>
              <HomePageSkeleton />
              <HomePageSkeleton />
            </>
          ) : (
            data && (
              <InfiniteScroll
                dataLength={data?.length || 0}
                next={() => setSize((size) => size + 1)}
                hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
                loader={
                  <div className="mt-4">
                    <SlideSkeleton item={6} />
                  </div>
                }
                endMessage={
                  <p className="text-center mt-6 text-white">
                    Nothing more to see
                  </p>
                }
              >
                <>
                  <h1 className="font-semibold text-xl mb-4">
                    Category: {`${name}`}
                  </h1>
                  <GridLayout>
                    {data
                      ?.reduce((acc, current) => {
                        acc.push(...current);
                        return acc;
                      }, [])
                      ?.map((item) => (
                        <MovieCard
                          key={item.id}
                          imageUrl={item.coverVerticalUrl}
                          id={item.id}
                          category={item.domainType}
                          name={item.name}
                        />
                      ))}
                  </GridLayout>
                </>
              </InfiniteScroll>
            )
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Categories;
