import React from "react";
import moment from "moment";

const Card = ({ article }) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div>
        <img
          src={article.image}
          className="object-cover rounded-lg h-[200px] w-[320px]"
          alt="popular"
        />
      </div>
      <div className="font-semibold text-gray-900">
        {article.title.length > 38
          ? article.title.substring(0, 38) + " ..."
          : article.title}
      </div>
      <div className="text-xs text-gray-500">
        {article.content.substring(0, 250)} ...
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/assets/images/avatar-2.jpg"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[9px] text-gray-500">{article.author}</div>
            <div className="text-[9px] text-gray-500">
              {moment(article.createdAt).format("LL")}
            </div>
          </div>
        </div>
        <button className="py-2 px-4 text-xs border border-gray-200 rounded-md hover:bg-black hover:text-white">
          Read more
        </button>
      </div>
    </div>
  );
};

export default Card;
