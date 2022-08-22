import React, { useState } from "react";

const TabBar = ({ setArticleShow }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArticle = () => {
    setActiveIndex(0);
    setArticleShow(true);
  };

  const handleVideo = () => {
    setActiveIndex(1);
    setArticleShow(false);
  };

  return (
    <div className="flex justify-between items-center mt-16">
      <div className="flex flex-col gap-1 w-96">
        <h3 className="text-gray-700 font-medium text-xl">
          Recent Articles & Videos
        </h3>
        <p className="text-gray-500 text-sm">
          Stay up to date on the current state of finance, never miss out on
          what matters
        </p>
      </div>
      <div className="flex gap-4">
        <button
          className={`${
            activeIndex === 0 ? "bg-black text-white" : "bg-white text-black"
          } py-2 px-4 border text-sm rounded-lg hover:bg-black hover:text-white`}
          onClick={handleArticle}
        >
          Articles
        </button>
        <button
          className={`${
            activeIndex === 1 ? "bg-black text-white" : "bg-white text-black"
          } py-2 px-4 border text-sm rounded-lg hover:bg-black hover:text-white`}
          onClick={handleVideo}
        >
          Videos
        </button>
      </div>
    </div>
  );
};

export default TabBar;
