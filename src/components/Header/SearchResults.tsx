import React, { FC } from "react";
import { Link } from "react-router-dom";

interface SearchResultsProps {
  data: string[];
}

const SearchResults: FC<SearchResultsProps> = ({ data }) => {
  function createMarkup(item: string) {
    return { __html: item };
  }

  const getTextContent = (item: string) => {
    const divElement = document.createElement("div");
    divElement.innerHTML = item;

    return divElement.textContent;
  };

  return (
    <ul className="md:absolute static bottom-[-200px] left-0 right-0 h-[200px] overflow-auto z-[1000] bg-[#333] px-2">
      {data?.map((item, index: number) => (
        <li
          key={index}
          className="text-white font-semibold text-sm py-2 border-b"
        >
          <Link to={`/search?query=${getTextContent(item)}`}>
            <div dangerouslySetInnerHTML={createMarkup(item)}></div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
