import React from 'react';

class CallBack extends React.Component{

    constructor(){
        super()
        this.title = "CallBack page"
    }

    render(){
        return <h1>{this.title}</h1>
    }
}

export default CallBack;