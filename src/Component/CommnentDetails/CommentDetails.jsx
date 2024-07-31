import { useLoaderData } from "react-router-dom";

const CommentDetails = () => {
  const details = useLoaderData();
  const { id, body } = details;
  return (
    <div className="border text-center rounded-xl m-10">
      <h1 className="text-3xl">{id}</h1>
      <p className="text-lg">{body}</p>
    </div>
  );
};

export default CommentDetails;
