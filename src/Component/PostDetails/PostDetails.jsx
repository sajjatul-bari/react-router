import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const pDetails = useLoaderData();
  const { id, body } = pDetails;
  const nevigate = useNavigate();
  const eventGoBackButton = () => {
    nevigate(-1);
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl">Post details about :{id}</h1>
      <p className="text-xl text-center">{body}</p>
      <button onClick={eventGoBackButton} className="btn text-yellow-600">
        Go back
      </button>
    </div>
  );
};

export default PostDetails;
