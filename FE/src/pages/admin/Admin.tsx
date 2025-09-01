import { useState } from "react";
import { createArticle } from "../../services/articleService";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createArticle({ title, content });
    setTitle("");
    setContent("");
    alert("Articolo pubblicato!");
  };

  return (
    <div>
      <h1>Area Admin</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titolo</label><br />
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Contenuto</label><br />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <button type="submit">Pubblica</button>
      </form>
    </div>
  );
};

export default Admin;
