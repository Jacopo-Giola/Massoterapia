import { useEffect, useState } from "react";
import { getArticles } from "../../services/articleService";

interface Article {
  id: number;
  title: string;
  content: string;
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then(setArticles);
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {articles.length === 0 && <p>Nessun articolo disponibile.</p>}
      {articles.map((a) => (
        <div key={a.id} style={{ borderBottom: "1px solid #ddd", marginBottom: "1rem" }}>
          <h2>{a.title}</h2>
          <p>{a.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
