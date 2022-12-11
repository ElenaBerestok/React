import React from "react";
import LoaderHOC from "./LoaderHOC";

const Contact = ({name, thumbnail}) => {
    return (
        <div>
            <div>{name}</div>
            <img src={thumbnail} />
        </div>
    )
}

export default LoaderHOC(Contact);