import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="py-10">
            <h2 className="text-4xl font-bold text-white text-center">USER DETAILS</h2>

            <h3 className="text-2xl font-bold text-white text-center">Total user : {users.length}</h3>

            <div className="grid grid-cols-3 gap-5">
                {
                    users.map((user,idx)=><User key={idx} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;