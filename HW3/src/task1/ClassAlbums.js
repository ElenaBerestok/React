import React from "react";
import RenderAlbums from "./RenderAlbums";
import withFetch from './withFetch';

class ClassAlbums extends React.Component {

  render (){

    const {albums} = this.props;

      return (
        <RenderAlbums data={albums}/>
      )
  }
}

export default withFetch(ClassAlbums);
