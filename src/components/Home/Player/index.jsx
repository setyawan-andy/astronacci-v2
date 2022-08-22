import React from "react";
import ReactPlayer from "react-player";

const Player = ({ video }) => {
  console.log(video);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <ReactPlayer
          url={video.url}
          controls={true}
          width="320px"
          height="182px"
        />
      </div>
      <div className="font-semibold text-gray-900">{video.title}</div>
      <div className="text-xs text-gray-500">{video.description}</div>
      <div className="text-xs text-gray-500">
        {`Copyright : ${video.copyright}`}
      </div>
    </div>
  );
};

export default Player;
