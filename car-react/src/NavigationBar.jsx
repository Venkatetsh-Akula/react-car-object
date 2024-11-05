import React from "react";
import { Link } from "react-router-dom";
function NavigationBar(){
    return(
        <div>
            <div className="app-container">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li>
                            <Link to="/first-page" className="nav-link">First Page</Link>
                        </li>
                        <li>
                            <Link to="/second-page" className="nav-link">Second Page</Link>
                        </li>
                        <li>
                            <Link to="/third-page" className="nav-link">Third Page</Link>
                        </li>
                        <li>
                            <Link to="/from-to" className="nav-link">From-To</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default NavigationBar;