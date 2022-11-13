import React from 'react';

class Home extends React.Component{

   
    constructor(){
        super()
        this.title = "Home page"
    }

    render(){
        return <h1>{this.title}</h1>
    }
}

export default Home;