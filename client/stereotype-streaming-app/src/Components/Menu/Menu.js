import './Menu.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faTv, faUser, faBookmark, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"


export const Menu = (props) => {
    return (
        <div>
            <div className="navbar">
            <div className="navbar-container">
                <div className="logo-container"><h1 className="logo">Stereotype Streaming</h1></div>
                <div className="menu-container">
                    <ul className="menu-list">
                        <li className="menu-list item">Home</li>
                        <li className="menu-list item">Movies</li>
                        <li className="menu-list item">New</li>
                        <li className="menu-list item">Popular</li>
                    </ul>
                </div>
                </div>
            </div>
    <div className="sidebar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="left-menu-icon"/>
        <FontAwesomeIcon icon={faTv} className="left-menu-icon"/>
        <FontAwesomeIcon icon={faHome} className="left-menu-icon"/>
        <FontAwesomeIcon icon={faUser} className="left-menu-icon"/>
        <FontAwesomeIcon icon={faBookmark} className="left-menu-icon"/>
    </div>
    </div>
    )
}
