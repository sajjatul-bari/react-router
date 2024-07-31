import { useLoaderData } from "react-router-dom";
import Comment from "./Comment/Comment";

const Comments = () => {
  const comments = useLoaderData();

  return (
    <div className="my-5 space-y-5">
      <h1 className="text-center text-3xl text-yellow-300 font-bold">
        Total Comments : {comments.length}
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
