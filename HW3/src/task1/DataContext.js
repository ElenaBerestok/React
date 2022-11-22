import React from "react";

export const DataContext = React.createContext();

export class DataProvider extends React.Component{
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
    };

    render() {

        return <DataContext.Provider value={this.state.albums}>
            {this.props.children}
        </DataContext.Provider>
    }
}








