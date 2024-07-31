import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const{name,email,id} = user ;
    return (
        <div className="border rounded-xl p-8 text-center">
            <h1 className="text-2xl">{name}</h1>
            <p className='text-xl'>{email}</p>
            <Link to={`/user/${id}`}><button className='btn'>Show detais</button></Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
  };
export default User;