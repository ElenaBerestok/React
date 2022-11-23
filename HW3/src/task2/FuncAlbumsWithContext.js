import React from "react";
import { DataContext } from "../task1/DataContext";
import RenderAlbums from "../task1/RenderAlbums";

const FuncAlbumsWithContext = () => {
    const albums = React.useContext(DataContext);

    return ( 
      <RenderAlbums data={albums}/>
    )
    
}

export default FuncAlbumsWithContext;