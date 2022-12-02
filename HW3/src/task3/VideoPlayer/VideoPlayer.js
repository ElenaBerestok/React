import React, {useState} from "react";
import nature from './video/nature.mp4';
import './VideoPlayerStyle.css';

const VideoPlayer = () => {
    const [state, setState] = useState({
        tracker: 0,
        theRestOfTime: null,
    });

    const {
        tracker,
        theRestOfTime,
    } = state;

    const videoRef = React.useRef();

    const trackerData = () => {
        const currentTime = videoRef.current.currentTime;
        const durationTime = videoRef.current.duration;
        const theRestOfTime = durationTime - currentTime;
        theRestOfTime.toFixed(2)
        setState({
            tracker: currentTime,
            theRestOfTime: theRestOfTime.toFixed(2)
        })
        
        return (
            tracker, 
            theRestOfTime
        )
    }

    const handleChange = (e) => {
        videoRef.current.seek = e.target.value;
        videoRef.current.currentTime = videoRef.current.seek;
       
        setState({...state})  
    }

    onplay = () => {
        videoRef.current.play()
    }

    onpause = () => {
        videoRef.current.pause()
    }

    return (
        <div className="container">
            <div>
                <video ref={videoRef} onTimeUpdate={trackerData}>
                    <source src={nature} type='video/mp4' />
                </video>
            </div>
            <input 
                type='range'
                min = '0'
                max = '15'
                value={tracker}
                onChange={(e) => handleChange(e)}
            />
            <span>{theRestOfTime}</span>
            <div className="wrapperButton">
                <button onClick={onplay} className="button">Play</button>
                <button onClick={onpause} className="button">Pause</button>
            </div>
        </div>
    )

}

export default VideoPlayer;