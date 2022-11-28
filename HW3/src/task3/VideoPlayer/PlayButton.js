import React from "react";

const PlayButton = (props) => {
    const toggleClass = props.isPlaying ? 'pause' : 'playing';
    const title = props.isPlaying ? 'Pause' : 'Playing';
    return <button onClick={props.onClick}className={toggleClass}>{title}</button>
};

export default PlayButton;