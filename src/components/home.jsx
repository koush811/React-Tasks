import "./components.css"
import img from "../imgs/sample.png"
import Quiz from "./quiz"
import Comment from "./comment"
import Timer from "./timer"


function Home(){
    return(
        <>
            <main>
                <div className="title-content">
                    <img src={img} alt="" className="main-img"></img>
                    <h2 className="page-title">Home</h2>
                </div>
                <Quiz></Quiz>
                <Comment></Comment>
                <Timer></Timer>
            </main>
        
        </>
    )
}

export default Home