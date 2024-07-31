import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const{title,body,id} =post;
    const nevigate = useNavigate();

    const handlePostDetails = ()=>{
        nevigate(`/post/${id}`)
    }


    return (
        <div className='border rounded-xl p-5 text-center'>
            <h1 className='text-2xl text-white'>{title}</h1>
            <p>{body}</p>
            <Link to ={`/post/${id}`}><button className='btn'>Show more</button></Link>

            <button onClick={handlePostDetails} className='btn text-yellow-300 bg-white'>Details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
  };
export default Post;