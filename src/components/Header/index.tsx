import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import NavbarList from "./NavbarList";
import Profile from "./Profile";
import SearchBox from "./SearchBox";

function Header() {
  const [showHeader, setShowHeader] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowHeader(false);
  }, [location.pathname]);

  return (
    <div className="px-4 py-3 bg-[#222] text-white fixed top-0 right-0 left-0 z-[9999]">
      <div className="flex items-center justify-between">
        <div
          style={{
            left: showHeader ? 0 : "-100%",
            transition: "all linear 0.1s",
          }}
          className={`flex md:flex-row flex-col p-2 md:p-0 md:items-center md:static fixed top-0 bottom-0 w-[200px] bg-[#222] z-[9999]`}
        >
          <Link to="/" className="flex items-center p-2">
            <RiMovieFill className="w-8 h-8 mr-2" />
            <span className="text-xl">Movie</span>
          </Link>
          <NavbarList />
        </div>

        <button
          onClick={() => setShowHeader(true)}
          className="flex items-center justify-center md:hidden block"
        >
          <FaBars className="w-6 h-6" />
        </button>

        {showHeader && (
          <div
            onClick={() => setShowHeader(false)}
            className="z-[9998] fixed bottom-0 top-0 right-0 left-0 backdrop-blur-sm"
          ></div>
        )}

        <div className="flex items-center relative">
          <SearchBox />
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Header;
