import React from "react";
import useSWR from "swr";
import { searchResultsKeyWord } from "../api/search";
import Error from "../components/Error";
import GridLayout from "../components/Layout/GridLayout";
import MainLayout from "../components/Layout/MainLayout";
import MovieCard from "../components/Movies/MovieCard";
import HomePageSkeleton from "../components/Skeleton/HomePageSkeleton";
import { useSearchParams } from "../hooks/useSearchParams";

const SearchResults = () => {
  const searchParams = useSearchParams();

  const { data, error } = useSWR(
    `search-results-${searchParams.get("query")}`,
    (key: string) => searchResultsKeyWord(key)
  );

  if (error) {
    return <Error />;
  }

  return (
    <MainLayout>
      <div className="text-white">
        {!data ? (
          <>
            <HomePageSkeleton />
          </>
        ) : (
          <>
            {data?.searchResults.length === 0 ? (
              <div className="text-white font-semibold text-xl text-center">
                No Results
              </div>
            ) : (
              <>
                <h1 className="text-xl font-semibold mb-4">{`Results for ${searchParams.get(
                  "query"
                )}`}</h1>
                <GridLayout>
                  {data?.searchResults.map((item: any) => (
                    <MovieCard
                      key={item.id}
                      id={item.id}
                      category={item.domainType}
                      imageUrl={
                        item.coverVerticalUrl || item.coverHorizontalUrl
                      }
                      name={item.name}
                    />
                  ))}
                </GridLayout>
              </>
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default SearchResults;
