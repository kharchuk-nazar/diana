import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Navbar = () => {

    const onLogout = () => {
        localStorage.removeItem("adminData");
    }

    const log = JSON.parse(localStorage.getItem("adminData")) ?
                              <React.Fragment> 
                                  <li><Link to="/progress">журнал</Link></li> 
                                  <li className="log" onClick={onLogout}><Link to="/">вийти</Link></li> 
                              </React.Fragment>               : 
                              <li className="log"><Link to="/login">війти</Link></li>

    return (
        <nav>
            <div className="nav-wrapper my_navbar">
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">про школу</Link></li>
                    <li><Link to="/students">учням</Link></li>
                    <li><Link to="/parents">батькам</Link></li>
                    <li><Link to="/school-life">життя школи</Link></li>
                    <li><Link to="/docs">галерея</Link></li>
                    {log}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;