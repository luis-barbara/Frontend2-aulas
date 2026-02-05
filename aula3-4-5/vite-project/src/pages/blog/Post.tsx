import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState<{
    id: number;
    title: string;
    content: string;
    userId: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/data.json`);
        if (!response.ok) throw new Error("Erro ao carregar dados");
        const data = await response.json();
        const foundPost = data.posts.find(
          (p: { id: number }) => p.id === Number(id),
        );
        setPost(foundPost || null);
        if (!foundPost) setError("Post não encontrado.");
      } catch (err) {
        setError("Erro ao carregar o post.");
        console.error("Failed to load post:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  return (
    <div className="main-container">
      {loading ? (
        <p>Carregando post...</p>
      ) : error ? (
        <p>{error}</p>
      ) : post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>
            <strong>Author ID:</strong> {post.userId}
          </p>
        </>
      ) : null}
    </div>
  );
};

export default Post;
