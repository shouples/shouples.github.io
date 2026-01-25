import { Link, useParams } from "react-router-dom";
import { posts } from "../data/projectPosts";

function formatDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(isoDate));
}

export function PostPage() {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="post-not-found">
        <h2>Post not found</h2>
        <p>The post you're looking for doesn't exist.</p>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <article className="post-page">
      <nav className="post-page-nav">
        <Link to="/posts">← Back to all posts</Link>
      </nav>

      <div className="post-page-body">
        <header className="post-page-header">
          <h1 className="post-page-title">{post.title}</h1>
          {post.date && (
            <time className="post-date" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          )}
        </header>

        {post.image && post.image.position === "top" && (
          <img className="post-image top" src={post.image.src} alt={post.image.alt} />
        )}

        <div className="post-content">{post.content}</div>

        {post.tags && post.tags.length > 0 && (
          <div className="post-page-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="tag small">
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.links && post.links.length > 0 && (
          <div className="post-links">
            {post.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="post-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon && <link.icon className="post-link-icon" />}
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
