import React from "react";
import { UsersContext } from "../context/UsersContext";

const withUsers = (WrappedComponent) => {
    return class extends React.Component{
        render(){
            return (
                <UsersContext.Consumer>
                    {(users) => {
                        return <WrappedComponent {...users}/>
                    }}
                </UsersContext.Consumer>
            )
        }
    }
}

export default withUsers;