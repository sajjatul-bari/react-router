import { PropTypes } from "prop-types";
import { Link, useNavigate } from "react-router-dom";
const Comment = ({ comment }) => {
  const { id, name, email } = comment;

  const navigate = useNavigate();
  const handleButton = ()=>{
    navigate(`/comments/${id}`)
  }
  return (
    <div className="border rounded-xl p-5 text-center space-y-3">
      <h3 className="text-xl">Number:{id}</h3>
      <h3 className="text-3xl">{name}</h3>
      <h3 className="text-xl">{email}</h3>
      <Link to={`/comments/${id}`}><button className="btn text-yellow-300">Show more</button></Link>

      <button onClick={handleButton}>Show Details</button>
    </div>
  );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
  };

export default Comment;
