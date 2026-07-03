import "./components.css"
import Iine from "./iine"

function Card(props) {


    return(
        <>
            <div className="card-content">
                <h2>{props.name}</h2>
                <img className="card-img" src={props.img} alt="" />
                <p>{props.text}</p>
                <Iine></Iine>
            </div>
        </>
    )
}

export default Card