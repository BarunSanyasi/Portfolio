import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faAddressCard, faHome, faListCheck } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => { setClick(false) };
    return (
        <div className="header">
            <Link className="logo" to="/" onClick={closeMenu}><h1>Barun.</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" onClick={closeMenu}><FontAwesomeIcon icon={faHome} className="icons" />Home</Link>
                </li>
                <li>
                    <Link to="/Project" onClick={closeMenu}><FontAwesomeIcon icon={faListCheck} className="icons" />Project</Link>
                </li>
                <li>
                    <Link to="/About" onClick={closeMenu}><FontAwesomeIcon icon={faAddressCard} className="icons" />About</Link>
                </li>
                <li>
                    <Link to="/Contact" onClick={closeMenu}><FontAwesomeIcon icon={faAddressBook} className="icons" />Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "white" }} />
                ) : (
                    <FaBars size={20} style={{ color: "white" }} />
                )}

            </div>
        </div>
    )
}

export default Navbar