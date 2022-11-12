import React from 'react';

class News extends React.Component{

    constructor(){
        super()
        this.title = "News page"
    }

    render(){
        return <h1>{this.title}</h1>
    }
}

export default News;