import React from "react";

export default class Lifecycle extends React.Component {
    constructor () {
        super ();
        this.state = {
            page: 'Home',
            title: 'Home page'
        };
    }

    componentDidUpdate(prevState) {
      if (this.state.title !== prevState) {
        this.state.title = 'News page'
      }
    }

    handlerClick = (e) => {
        e.preventDefault();
        this.setState({page: 'News'})
    }

    render (){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <div>
                    <button onClick={this.handlerClick}>Go</button>
                </div>
            </div>
        )
    }
}