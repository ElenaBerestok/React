import React from "react";
import RenderAlbums from "./RenderAlbums";

class ClassAlbums extends React.Component {
    state = {
      albums: [],
    }

    componentDidMount(){
      fetch ('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(
          (result) => {this.setState({
            albums: result,
            });
          }
        )
        .catch((err) => {
          throw new Error(err.message)
        })
    };

  render (){

    const {albums} = this.state;

      return (
        <RenderAlbums data={albums}/>
      )
  }
}

export default ClassAlbums;
