import axios from "axios";

export const getCategoryName = () => axios.get("/data/categories.json");

export const getBlogs = () => {
  return axios.get("./data/blogs.json");
};
