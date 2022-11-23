import React from "react";
import { DataContext } from "./DataContext";
import RenderAlbums from "./RenderAlbums";


class ClassWithContext extends React.Component {
  
  render (){
    return (
      <DataContext.Consumer>
        {(albums) => {
          return (
            // RenderAlbums(albums)
            <RenderAlbums data={albums}/>
          )
        }}
      </DataContext.Consumer>
    )

  }
}


export default ClassWithContext;
