import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";
import { getHome } from "../api/home";
import Error from "../components/Error";
import MainLayout from "../components/Layout/MainLayout";
import MovieSlide from "../components/Movies";
import HomePageSkeleton from "../components/Skeleton/HomePageSkeleton";
import { recommendItems } from "../models/movie";

function Home() {
  const getKey = (pageIndex: number) => {
    return `home-${pageIndex || 0}`;
  };

  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (key: string) => getHome(key),
    { revalidateFirstPage: false }
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
            <HomePageSkeleton />
          </>
        ) : (
          <InfiniteScroll
            dataLength={data?.length || 0}
            next={() => setSize((size) => size + 1)}
            hasMore={!error && data?.slice(-1)?.[0]?.length !== 0}
            loader={
              <div className="mt-8">
                <HomePageSkeleton />
              </div>
            }
            endMessage={
              <p className="text-center mt-6 text-white">Nothing more to see</p>
            }
          >
            {data
              ?.reduce((acc, cur) => {
                acc.push(...cur);
                return acc;
              }, [])
              ?.filter((item: recommendItems) => !item.bannerProportion)
              .map((item: recommendItems) => (
                <div key={item.homeSectionId}>
                  <h3 className="text-xl font-semibold mb-4">
                    {item.homeSectionName}
                  </h3>
                  <MovieSlide data={item.recommendContentVOList} />
                </div>
              ))}
          </InfiniteScroll>
        )}
      </div>
    </MainLayout>
  );
}

export default Home;
