import "./components.css"
import Iine from "./iine"

function Card(props) {


    return(
        <>
            <div className="card-content">
                <h2>{props.name}</h2>
                <img className="card-img" src={props.img} alt="" />
                <p>{props.text}</p>
                <p>評価：{props.star}/3</p>
                <Iine></Iine>
            </div>
        </>
    )
}

export default Card