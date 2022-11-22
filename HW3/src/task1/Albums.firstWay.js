import React from "react";


class AlbumsFirstWay extends React.Component {
    state = {
      albums: [],
      isLoaded: false,
      error: null,
    }

    componentDidMount(){
      fetch ('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(
          (result) => {this.setState({
            isLoaded: true,
            albums: result,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    };

  render (){

    const {albums, isLoaded, error} = this.state;

    if (!isLoaded) {
        return <div>...Loading</div>
    }else if (error) {
        return <div>Ошибка: {error.message}</div>
    } else {
        return (
          <div>
            {albums.map(album => (
              <div key={album.id}>
                {album.userId} - {album.id} - {album.title}
              </div>
            ))}
          </div>
        )
    }

  }
}

export default AlbumsFirstWay;
