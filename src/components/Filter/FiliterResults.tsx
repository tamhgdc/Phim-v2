import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";
import { searchAvandedResults } from "../../api/search";
import GridLayout from "../Layout/GridLayout";
import MovieCard from "../Movies/MovieCard";
import SlideSkeleton from "../Skeleton/SlideSkeleton";

interface FiliterResultsProps {
  filter: {
    name: string;
    params: string;
  };
  config: any;
}

const FiliterResults: FC<FiliterResultsProps> = ({ filter, config }) => {
  const getKey = (pageIndex: any, previousPageData: any) => {
    if (previousPageData && previousPageData.length === 0) return null;
    return `searchavandced-${filter.params}-${JSON.stringify(config)}-${
      previousPageData?.slice(-1)?.[0]?.sort || ""
    }`;
  };

  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key: string) => {
      if (filter.name.trim()) {
        return searchAvandedResults(key);
      }
      return [];
    },
    { revalidateFirstPage: false }
  );

  return (
    <>
      {!data ? (
        <>
          <SlideSkeleton item={12} />
        </>
      ) : (
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
            <p className="text-center mt-6 text-white">Nothing more to see</p>
          }
        >
          <GridLayout>
            {data
              ?.reduce((acc, current) => {
                acc.push(...current);
                return acc;
              }, [])
              ?.map((item: any) => (
                <MovieCard
                  key={item.id}
                  id={item.id}
                  imageUrl={item.coverVerticalUrl}
                  category={item.domainType}
                  name={item.name}
                />
              ))}
          </GridLayout>
        </InfiniteScroll>
      )}
    </>
  );
};

export default FiliterResults;
