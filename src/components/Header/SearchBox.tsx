import React, { FormEvent, useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { searchTopKeyWord } from "../../api/search";
import useDebounce from "../../hooks/useDebounce";
import Error from "../Error";
import SearchResults from "./SearchResults";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const value = useDebounce(searchText, 300);

  const navigate = useNavigate();

  const { data, error } = useSWR(`search-${value}`, (key: string) => {
    if (!value.trim()) {
      return { searchResults: [] };
    } else {
      return searchTopKeyWord(key);
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!searchText.trim()) return;

    navigate(`/search?query=${encodeURIComponent(searchText)}`);

    setSearchText("");
  };

  useEffect(() => {
    if (data && data?.searchResults?.length > 0) {
      setShowSearchResults(true);
    }
  }, [data?.searchResults?.length]);

  useEffect(() => {
    window.addEventListener("click", () => {
      setShowSearchResults(false);
    });

    return () => {
      window.removeEventListener("click", () => {
        setShowSearchResults(false);
      });
    };
  }, []);

  useEffect(() => {
    inputRef &&
      inputRef.current?.addEventListener("focus", () => {
        if (data && data?.searchResults?.length > 0) {
          setShowSearchResults(true);
        }
      });

    return () => {
      inputRef.current?.removeEventListener("focus", () => {
        if (data && data?.searchResults?.length > 0) {
          setShowSearchResults(true);
        }
      });
    };
  }, [showSearchResults]);

  if (error) {
    return <Error />;
  }

  return (
    <>
      <button
        onClick={() => setShowSearch(!showSearch)}
        className="w-10 h-10 bg-[#333] rounded-full flex items-center justify-center md:hidden"
      >
        {showSearch ? (
          <AiOutlineClose className="w-6 h-6" />
        ) : (
          <AiOutlineSearch className="w-6 h-6" />
        )}
      </button>
      <form
        style={{
          top: showSearch ? "15px" : "-33px",
          transition: "all linear 0.1s",
        }}
        onSubmit={(e: FormEvent) => handleSubmit(e)}
        className={`bg-[#333] px-2 rounded-sm overflow-hidden md:static fixed left-0 right-0 ml-4 mr-[65px] md:mx-0`}
      >
        <div>
          <div className="items-center flex">
            <input
              ref={inputRef}
              className="px-2 py-1 outline-none bg-transparent flex-1"
              placeholder="Search...."
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
              onClick={(e) => e.stopPropagation()}
            />
            <AiOutlineSearch className="w-6 h-6 md:block hidden" />
          </div>

          {data && showSearchResults && (
            <SearchResults data={data.searchResults} />
          )}
        </div>
      </form>
    </>
  );
};

export default SearchBox;
