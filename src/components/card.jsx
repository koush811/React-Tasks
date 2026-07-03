import "./components.css"

function Card(props) {


    return(
        <>
            <div className="card-content">
                <h2>{props.name}</h2>
                <img className="card-img" src={props.img} alt="" />
                <p>{props.text}</p>
            </div>
        </>
    )
}

export default Card