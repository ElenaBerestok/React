import  {DataContext}  from "./DataContext";
import React from "react";
import RenderAlbums from "./RenderAlbums";


class ClassWithContext extends React.Component {
  
  render (){
    return (
      <DataContext.Consumer>
        {(albums) => {
          return (
            <RenderAlbums data={albums}/>
          )
        }}
      </DataContext.Consumer>
    )

  }
}


export default ClassWithContext;
