import React from "react";
import withUsers from "./withUsers";

class App extends React.Component{

    // state = {
    //     users: [],
    // }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => response.json())
    //         .then((result) => {
    //             this.setState({users: result})
    //         })
    //         .catch((err) => {
    //             throw new Error(err.message)
    //         })
    // }

    render(){
        // const {users} = this.state
        // return (
        //     <div>
        //         {users.map((user) => (
        //             <div key={user.id}>
        //                 {user.id}
        //             </div>
        //         ))}
        //     </div>
        // )

        const {users} = this.props;

        return (

            <div>
                {users.map((prop) => (
                    <div key={prop.id}>
                        {prop.id}: Name: {prop.name} Email: {prop.email}
                    </div>
                ))}
            </div>
        )
    }

}

export default withUsers(App)