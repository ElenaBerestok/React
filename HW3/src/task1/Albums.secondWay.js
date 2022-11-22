import React from "react";
import { DataContext } from "./DataContext";


class AlbumsSecondWay extends React.Component {
    
    
  render (){

    return (
      <DataContext.Consumer>
        {(albums) => {
          return (
            <div>
              <div>
              {albums.map(album => (
                <div key={album.id}>
                  {album.userId} - {album.id} - {album.title}
                </div>
              ))}
              </div>
          </div>
          )
        }}
      </DataContext.Consumer>
    )

  }
}


export default AlbumsSecondWay;
