import { PostList } from "../components/PostList";
import { posts } from "../data/posts";

export function Home() {
  return (
    <>
      <p>Hello. 👋 Thanks for checking out my page.</p>
      <PostList posts={posts} direction="vertical" />
    </>
  );
}
