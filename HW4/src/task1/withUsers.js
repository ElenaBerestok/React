import React from "react";

const withUsers = (WrappedComponent) => {
    return class extends React.Component{
        state = {
            users: [],
        }
    
        componentDidMount(){
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((result) => {
                    this.setState({users: result})
                })
                .catch((err) => {
                    throw new Error(err.message)
                })
        }
        
        render(){
            return <WrappedComponent {...this.props} {...this.state} />
        }
    }
}

export default withUsers;