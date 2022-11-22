import React, {useEffect} from "react";
import './Ref.css';


const Ref = () => {

    const squareRef = React.useRef();

    useEffect(() => {
        setTimeout(() => {
            squareRef.current.className = 'shiftSquare'
        }, 2000)
       
    })

    return <div ref={squareRef} className='square'></div>
}

export default Ref;
