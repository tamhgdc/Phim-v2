import React from "react";
import SlideSkeleton from "./SlideSkeleton";

const HomePageSkeleton = () => {
  return (
    <div className="mb-8">
      <h1 className="skeleton skeleton-text mb-4 w-[100px] h-[20px]"></h1>
      <SlideSkeleton item={6} />
    </div>
  );
};

export default HomePageSkeleton;
