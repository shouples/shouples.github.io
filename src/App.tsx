import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { PostPage } from "./pages/PostPage";
import { Posts } from "./pages/Posts";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts" element={<Posts />} />
      </Route>
    </Routes>
  );
}
