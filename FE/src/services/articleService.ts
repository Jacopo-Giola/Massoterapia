import axios from "axios";

const API_URL = "http://localhost:8080/api/articles";

interface Article {
  title: string;
  content: string;
}

export const getArticles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createArticle = async (article: Article) => {
  const response = await axios.post(API_URL, article);
  return response.data;
};
