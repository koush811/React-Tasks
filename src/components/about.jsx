import img from "../imgs/404.png"
import "./components.css"
import Card from "./card"
import cardContent from "../data/data"

function About(){
    return(
        <>
            <div className="title-content">
                <img src={img} alt="" className="main-img"></img>
                <h2 className="page-title">About</h2>
            </div>
        
            <div className="card-area">
                {cardContent.map(card => (
                    <Card key={card.id} name={card.name} text={card.text} img={card.img}></Card>
                ))}
            </div>
        </>        
    )
}

export default About