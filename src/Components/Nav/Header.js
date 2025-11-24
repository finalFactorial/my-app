import React from "react";
import "../Styles/Header.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div>
                <ul>
                    <li><Link to={ "/" }>Home</Link></li>
                    <li><Link to={ "/News" }>News</Link></li>
                    <li><Link to={ "/Contact" }>Contact</Link></li>
                    <li><Link to={ "/About" }>About</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header;