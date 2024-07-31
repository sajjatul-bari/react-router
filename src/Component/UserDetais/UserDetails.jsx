import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const details = useLoaderData();

    const {name,phone,website} = details
    return (
        <div>
            <h1 className="text-5xl">{name}</h1>
            <h3>{phone}</h3>
            <h3>{website}</h3>
        </div>
    );
};

export default UserDetails;