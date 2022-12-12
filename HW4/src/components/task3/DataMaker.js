import React, { useEffect, useState } from "react";


const DataMaker = ({url, renderDataUrl}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Error')
                }
            })
            .then((result) => {
                setPosts(result)
            })
            .catch((err) => {
                alert(err.message)
                }
            )

    }, [])

    return (
        <div>
            {renderDataUrl(posts)}
        </div>
    )
}

export default DataMaker;