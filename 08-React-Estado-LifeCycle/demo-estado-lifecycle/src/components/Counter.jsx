import { useState, useEffect } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }

    useEffect(() => {
        console.log('se montó el componente funcional');

        return console.log('se modificó el estado');

    }, [count, props])

    return(
        <div>
            <h1>FUNCTION COMPONENT</h1>
            <p>{count}</p>
            <button onClick={handleClick} >Aumentar</button>
        </div>
    )
}


export default Counter;