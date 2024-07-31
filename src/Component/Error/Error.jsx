import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h3 className="text-4xl text-center">Opppppsssss</h3>
      {error.statusText || error.status}
      <h1>{error.status === 404 && <div>404</div>}</h1>
      <h1>Go back where you from</h1>
      <Link to="/"><button className="btn text-white">Home</button></Link>
      
    </div>


  );
};

export default Error;
