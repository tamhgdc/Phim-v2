import React from "react";
import HomePageSkeleton from "./HomePageSkeleton";

const DetailSkeleton = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="aspect-video flex-1 skeleton mr-0 md:mr-5"></div>
        <div className="w-[300px] skeleton aspect-video md:block hidden"></div>
      </div>

      <div className="mt-4 flex">
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[40px]"></div>
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[40px]"></div>
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[40px]"></div>
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[40px]"></div>
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[40px]"></div>
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[40px]"></div>
      </div>

      <div className="mt-4 flex">
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[80px]"></div>
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[80px]"></div>
        <div className="p-2 mr-2 rounded-sm h-[40px] skeleton w-[80px]"></div>
      </div>

      <div className="mt-4">
        <h1 className="skeleton skeleton-text h-[28px] w-[150px] mb-4"></h1>
        <div className="mb-4">
          <p className="skeleton skeleton-text h-[20px] w-full mb-2"></p>
          <p className="skeleton skeleton-text h-[20px] w-[80%]"></p>
        </div>
      </div>

      <HomePageSkeleton />
    </div>
  );
};

export default DetailSkeleton;
