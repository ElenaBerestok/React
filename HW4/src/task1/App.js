import React from "react";
import withUsers from "./withUsers";

const  App = ({users}) => {
    return(
        <div>
            {users.map((user) => (
                <div key={user.id} >
                    {user.name} - {user.email}
                </div>
            ))}
        </div>
    )
}

export default withUsers(App)