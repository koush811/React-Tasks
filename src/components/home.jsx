import "./components.css"
import img from "../imgs/sample.png"
import Quiz from "./quiz"
import Comment from "./comment"


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
            </main>
        
        </>
    )
}

export default Home