import { Link } from "react-router-dom";


function Header(){


    return(
        <header>
            <h2>（名前）</h2>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </header>
    )
}

export default Header