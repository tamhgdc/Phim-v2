import React from "react";
import GridLayout from "../Layout/GridLayout";
import VideoCardSkeleton from "./VideoCardSkeleton";

const SlideSkeleton = ({ item }: { item: number }) => {
  return (
    <GridLayout>
      {Array.from(Array(item).keys()).map((item) => (
        <VideoCardSkeleton key={item} />
      ))}
    </GridLayout>
  );
};

export default SlideSkeleton;
