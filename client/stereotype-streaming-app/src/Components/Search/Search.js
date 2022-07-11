import './Search.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

export const Search = () => {
    return (
        <div className="search-box">
            <button className="btn-search">
                <i className="fas fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search"/>
                </i>
            </button>
            <input type="text" className="input-search" placeholder="Type to Search..."/>
        </div>

    )
}