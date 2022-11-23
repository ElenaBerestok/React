import React from "react";

const RenderAlbums = (props) => {
    
    return (
        <div>
            {props.data.map((prop, index) => (
                <div key={prop.id} >
                    {prop.id} - {index} - {prop.title}
                </div>
            ))}
        </div>
    )
    
}

export default RenderAlbums;