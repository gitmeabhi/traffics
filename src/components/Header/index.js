
import { NavLink } from "react-router-dom"
import "./index.css"

const Header = () =>{
    return(
        <nav className="navbar">
            <h1 className="logo">Levon Techno</h1>
            <ul className="nav-list">
                <NavLink to ="/" className="nav-items">
                <li className="nav-item">Home</li>
                </NavLink>
               
            </ul>
        </nav>
    )
}

export default Header