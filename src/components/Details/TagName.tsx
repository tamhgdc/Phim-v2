import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TagList } from "../../models/details";

interface tagNameProps {
  tagName: TagList;
}

const TagName: FC<tagNameProps> = ({ tagName }) => {
  return (
    <Link
      to={`/categories/${tagName.id}/${tagName.name}`}
      className="p-2 bg-[#333] mr-2 rounded-sm"
    >
      <span>{tagName.name}</span>
    </Link>
  );
};

export default TagName;
