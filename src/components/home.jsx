import "./components.css"
import img from "../imgs/sample.png"

function Home(){
    return(
        <>
            <main>
                <div className="title-content">
                    <img src={img} alt="" className="main-img"></img>
                    <h2 className="page-title">Home</h2>
                </div>

                
            </main>
        
        </>
    )
}

export default Home