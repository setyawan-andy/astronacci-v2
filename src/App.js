import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getArticles } from "./actions/articles";
import { getVideos } from "./actions/videos";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
    dispatch(getVideos());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="auth" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
