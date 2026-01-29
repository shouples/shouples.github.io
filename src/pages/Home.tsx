import { PostList } from "../components/PostList";
import { posts } from "../data/projectPosts";

export function Home() {
  return (
    <>
      <p>Hello. 👋 Thanks for checking out my page.</p>
      <p>
        Check below for updates on any projects I'm working on, whether personal or professional.
      </p>
      <PostList posts={posts} direction="vertical" />
    </>
  );
}
