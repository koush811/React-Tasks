import img from "../imgs/404.png"
import "./components.css"

function About(){
    return(
        <>
            <div className="title-content">
                <img src={img} alt="" className="main-img"></img>
                <h2 className="page-title">About</h2>
            </div>
        
            <div className="reaction-content">
                <button className="good">👍</button>
                <button className="hert">💗</button>
            </div>
        </>

        
    )
}

export default About