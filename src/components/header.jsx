import { NavLink } from "react-router-dom";

import "./components.css"

function Header(){

    return(
        <header>
            <h2>Ito Kosei Portfolio</h2>
            
            <div className="links">
                <NavLink to="/" 
                    className={({isActive}) => 
                        isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink to="/about" 
                    className={({isActive}) => 
                        isActive ? "active" : ""
                    }
                >
                    About
                </NavLink>
            </div>
        </header>
    )
}

export default Header