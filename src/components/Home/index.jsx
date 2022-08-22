import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import TabBar from "./TabBar";
import Card from "./Card";
import Player from "./Player";

const Home = () => {
  const navigate = useNavigate();
  const [articleShow, setArticleShow] = useState(true);
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const datas = useSelector((state) => state.articles);
  const dataVideos = useSelector((state) => state.videos);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);

  useEffect(() => {
    if (user?.result?.member === "free" || user?.result === undefined) {
      setArticles(datas.slice(0, 3));
      setVideos(dataVideos.slice(0, 3));
    } else if (user.result.member === "gold") {
      setArticles(datas.slice(0, 10));
      setVideos(dataVideos.slice(0, 10));
    } else {
      setArticles(datas);
      setVideos(dataVideos);
    }
  }, [datas, dataVideos]);

  const filteredArticles = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.content.toLowerCase().includes(search.toLowerCase())
    );
  });

  const filteredVideos = videos.filter((video) => {
    return (
      video.title.toLowerCase().includes(search.toLowerCase()) ||
      video.description.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="container">
      <Header setSearch={setSearch} />
      <TabBar setArticleShow={setArticleShow} />
      <div className="grid grid-cols-3 gap-8 mt-12">
        {articleShow ? (
          <>
            {filteredArticles.map((article, index) => (
              <Card article={article} key={index} />
            ))}
          </>
        ) : (
          <>
            {filteredVideos.map((video, index) => (
              <Player video={video} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
