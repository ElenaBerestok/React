import React from "react";
import { DataContext } from "../task1/DataContext";

const FuncAlbumsSecondWay = () => {
    const albums = React.useContext(DataContext);

    return ( 
        <div>
            {albums.map(album => (
                <div key={album.id}>
                    {album.userId} - {album.id} - {album.title}
                </div>
                )
            )}
        </div>
    )
    
}

export default FuncAlbumsSecondWay;