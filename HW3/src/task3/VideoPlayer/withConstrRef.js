import React from "react";

const WithConstrRef = (WrapperComponent) => {
    
    return class extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                isPlaying: false,
                tracker: 0,
            }
        }
    
        videoRef = React.createRef();

        render(){
            return (
                <WrapperComponent {...this.props}  {...this.state}/>
            )
        }
    }
}

export default WithConstrRef

