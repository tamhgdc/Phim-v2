import React from "react";
import { AiOutlineToTop } from "react-icons/ai";

const BackToTop = () => {
  const backTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={backTop}
      className="fixed bottom-[40px] right-[40px] z-[9999]"
    >
      <button className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
        <AiOutlineToTop className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default BackToTop;
