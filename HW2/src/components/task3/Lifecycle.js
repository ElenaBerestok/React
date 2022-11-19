import React from "react";

export default class Lifecycle extends React.Component {
   
    state = {
        title: 'Home page'
    };

    componentDidMount(){
        this.changeTitle()
    }

    componentDidUpdate() {
      this.changeTitle()
    }

    changeTitle = () => document.title = this.state.title

    handlerClick = () => {
        this.setState({title: 'News page'})
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