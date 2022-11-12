import React from 'react';

class Contacts extends React.Component{

    constructor(){
        super()
        this.title = "Contacts page"
    }

    render(){
        return <h1>{this.title}</h1>
    }
}

export default Contacts;