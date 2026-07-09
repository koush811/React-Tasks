import img from "../imgs/404.png"
import "./components.css"
import Card from "./card"
import { cardContent } from "../data/data"
import { useState } from "react"

function About(){

    const [sortType,setSortType] = useState("normal")

    let cards = ""
    if(sortType === "sort"){
        cards = [...cardContent].sort((a,b) => b.star - a.star) 
    }else{
        cards = [...cardContent]
    }

    return(
        <>
            <div className="title-content">
                <img src={img} alt="" className="main-img"></img>
                <h2 className="page-title">About</h2>
            </div>
        
            <div className="card-area">
                <h1>Task1 2 6</h1>
                <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                    <option value="normal">通常</option>
                    <option value="sort">評価順</option>
                </select>
                {cards.map(card => (
                    <Card key={card.id} name={card.name} text={card.text} img={card.img} star={card.star}></Card>
                ))}
            </div>
        </>        
    )
}

export default About