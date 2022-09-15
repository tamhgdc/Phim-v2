import { Link } from "react-router-dom";
import React from "react";

const Error = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#222] text-white">
      <div>
        <div>
          <img
            src="https://raw.githubusercontent.com/an678-mhg/NextComics/main/public/not-found.png"
            alt="not-found"
          />
        </div>
        <div className="w-full flex justify-center">
          <Link
            to="/"
            className="bg-primary-300 px-4 py-2 text-text-color rounded-md font-semibold bg-[#333]"
          >
            Trở lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
