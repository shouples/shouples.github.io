import { useState } from "react";
import { Post, type PostData } from "./Post";

interface PostListProps {
  posts: PostData[];
  direction?: "vertical" | "grid";
}

export function PostList({ posts, direction = "vertical" }: PostListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredPosts = activeTag
    ? posts.filter((post) => post.tags?.includes(activeTag))
    : posts;

  const handleTagClick = (tag: string) => {
    setActiveTag((current) => (current === tag ? null : tag));
  };

  const clearFilter = () => {
    setActiveTag(null);
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
        {filteredPosts.map((post) => (
          <Post
            key={post.id}
            {...post}
            onTagClick={handleTagClick}
            activeTag={activeTag ?? undefined}
          />
        ))}
      </div>
    </div>
  );
}
