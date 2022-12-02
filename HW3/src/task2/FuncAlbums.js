import React, {useState, useEffect} from "react";
import RenderAlbums from '../task1/RenderAlbums'

const FuncAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Error')
            }
        })
        .then((result) => {
            setAlbums(result);
        })
        .catch((err) => {
            alert(err.message)
        })

    }, [])

    return (
        <RenderAlbums data={albums}/>
    )
    
}

export default FuncAlbums;