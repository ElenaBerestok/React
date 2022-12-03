import React from "react";

export const UsersContext = React.createContext();

export class UsersProvider extends React.Component{
    state = {
        users: [],
    }

    componentDidMount(){
        fetch ('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(
                (result) => {this.setState({
                    users: result,
                  });
                }
              )
            .catch((err) => {
                alert (err.message)
            })
    }

    render (){
       return (
            <UsersContext.Provider value={this.state}>
                {this.props.children}
            </UsersContext.Provider>
       )
    }
}