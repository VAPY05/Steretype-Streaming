import './Menu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faTv, faUser, faBookmark, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"


import { Link, Router } from 'react-router-dom';

export const Menu = (props) => {
    return (
        <>
            <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container"><h1 className="logo">Stereotype Streaming</h1></div>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li className="menu-list item"><Link to={"/"}>Home</Link></li>
                        <li className="menu-list item"><Link to={"/movies"}>Movies</Link></li>
                        <li className="menu-list item"><Link to={"/movies/new"}>New</Link></li>
                        <li className="menu-list item"><Link to={"/movies/trending"}>Trending</Link></li>
                    </ul>
                </div>
                </div>
            </div>
    <div className="sidebar">
        <Link to={"/movies/search"}><FontAwesomeIcon icon={faMagnifyingGlass} className="left-menu-icon"/></Link>
        <Link to={"/movies"}><FontAwesomeIcon icon={faTv} className="left-menu-icon"/></Link>
        <Link to={"/"}><FontAwesomeIcon icon={faHome} className="left-menu-icon"/></Link>
        <Link to={"/profile"}><FontAwesomeIcon icon={faUser} className="left-menu-icon"/></Link>
        <Link to={"/bookmarks"}><FontAwesomeIcon icon={faBookmark} className="left-menu-icon"/></Link>
    </div>
    </>
    )
}
