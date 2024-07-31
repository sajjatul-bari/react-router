import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="mt-10 space-y-5">
      <h1 className="text-5xl text-center text-yellow-200">Posts : {posts.length}</h1>
      <div className="grid grid-cols-3 gap-5 ">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
