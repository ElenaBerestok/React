import React from "react";
import withFetch from './withFetch';

export const DataContext = React.createContext();

class DataProvider extends React.Component{

    render() {

        return <DataContext.Provider value={this.props.albums}>
            {this.props.children}
        </DataContext.Provider>
    }
}

export default withFetch(DataProvider);








