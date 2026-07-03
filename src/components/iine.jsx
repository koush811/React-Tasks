import { useState } from "react"
import "./components.css"

function Iine(){

    const [count,setCount] = useState({Good: 0, Bad: 0, OK: 0})

    const Goodclick = () => {
        setCount({
            ...count,
            Good: count.Good + 1
        })  
    }

    const Badclick = () => {
        setCount({
            ...count,
            Bad: count.Bad + 1
        })    
    }

    const Okclick = () => {
        setCount({
            ...count,
            OK: count.OK + 1
        })  
    }

    return(
        <>
            <div className="reactions">
                <button onClick={Goodclick}>👍 {count.Good}</button>
                <button onClick={Badclick}>👎 {count.Bad}</button>
                <button onClick={Okclick}> 👌{count.OK}</button>
            </div>
        
        </>
    )
}

export default Iine