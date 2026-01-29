import { useState } from "react";
import { Post, type PostData } from "./Post";

interface PostListProps {
  posts: PostData[];
  direction?: "vertical" | "grid";
}

const PAGE_SIZE = 20;

export function PostList({ posts, direction = "vertical" }: PostListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags?.includes(activeTag))
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  const handleTagClick = (tag: string) => {
    setActiveTag((current) => (current === tag ? null : tag));
    setPage(1);
  };

  const clearFilter = () => {
    setActiveTag(null);
    setPage(1);
  };

  return (
    <div className="post-list-container">
      {activeTag && (
        <div className="post-filter-bar">
          <span>Filtered by: <strong>{activeTag}</strong></span>
          <button type="button" className="clear-filter" onClick={clearFilter}>
            Clear filter
          </button>
        </div>
      )}
      <div className={`post-list ${direction}`}>
        {paginatedPosts.map((post) => (
          <Post
            key={post.id}
            {...post}
            onTagClick={handleTagClick}
            activeTag={activeTag ?? undefined}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button
            type="button"
            className="pagination-btn"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            ← Previous
          </button>
          <span className="pagination-info">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            className="pagination-btn"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
