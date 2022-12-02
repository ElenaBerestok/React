import React from "react";

const withFetch = (WrappedComponent) => {
    return class extends React.Component{

        state = {
            albums: [],
        }
      
        componentDidMount(){
            fetch ('https://jsonplaceholder.typicode.com/albums')
              .then(response => response.json())
              .then(
                (result) => {this.setState({
                  albums: result,
                  });
                }
              )
              .catch((err) => {
                alert(err.message)
              })
        };

        render(){
            return (
                <WrappedComponent {...this.props} {...this.state} />
            )
        }
    }
}

export default withFetch;