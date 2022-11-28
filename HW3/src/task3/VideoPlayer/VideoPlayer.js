import React, {useState} from "react";
import nature from './video/nature.mp4';
import './VideoPlayerStyle.css';
import PlayButton from "./PlayButton";


// class VideoPlayer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isPlaying: false,
//             tracker: 0,
//         }
//     }

//     videoRef = React.createRef();

//     handleClick(){
//         if(this.state.isPlaying) {
//             this.videoRef.current.pause()
//         } else {
//             this.videoRef.current.play()
//         }
//         this.setState(prevState => {
//             return {
//                 isPlaying: !prevState.isPlaying
//             };
//         });
//     };

//     trackerData(){
//         const tacker = (this.videoRef.current.currentTime)/(this.videoRef.current.duration)
//         this.setState({tracker: tacker})
//     }


//     render() {

//         const isPlaying = this.state.isPlaying;
//         return (
//             <div className="container">
//                     <video controls ref={this.videoRef} onTimeUpdate={this.trackerData}>
//                         <source src={nature} type='video/mp4' />
//                     </video>
//                     < PlayButton 
//                         isPlaying={isPlaying}
//                         title={isPlaying}
//                         onClick={this.handleClick.bind(this)}  
//                     />
//             </div>
//         )
//     }
// }

const VideoPlayer = () => {
    const [tracker, setTracker] = useState(0);

    const videoRef = React.createRef();

    onplay = () => {
        videoRef.current.play()
    }

    onpause = () => {
        videoRef.current.pause()
    }

    const trackerData = () => {
        const currentTime = videoRef.current.currentTime;
        const derutionTime = videoRef.current.duration;
        const tracker = (currentTime/derutionTime);
        setTracker({tracker: tracker})
        
        return tracker
    }

    // const lengthVideo = () => {

    // }

    // const handleTime = () => {

    // }

    return (
        <div className="container">
            <div>
                <video controls ref={videoRef} >
                    <source src={nature} type='video/mp4' />
                </video>
            </div>
            {/* <input 
                value={tracker}
                type='range'
                min = '0'
                max onDurationChange ={lengthVideo}
                onChange={handleTime}
            /> */}
            <div className="wrapperButton">
                <button onClick={onplay} className="button">Play</button>
                <button onClick={onpause} className="button">Pause</button>
            </div>
           
        </div>
    )

}

export default VideoPlayer;