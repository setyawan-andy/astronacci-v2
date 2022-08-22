import axios from "axios";

const API = axios.create({
  baseURL: "https://astronacci-backend.herokuapp.com",
});

export const fetchArticles = () => API.get("/articles");
export const fetchVideos = () => API.get("/videos");
export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);
