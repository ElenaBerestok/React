import React, {useState, useEffect} from "react";

const FuncAlbums = () => {
    const [albums, setAlbums] = useState(Array);

    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/albums')
            .then(response =>{
                if(response.ok) {
                    const result = response.json()
                    setAlbums({albums: result});
                } else {
                    const {error} = response.json()
                    throw new Error(error)
                }
            })
    })

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

export default FuncAlbums;