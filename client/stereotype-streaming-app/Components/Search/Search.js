import './Search.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    function searchHandler() {
        navigate(`/movies/${value}`)
    }

    return (
        <div className="search-box">
            <form onSubmit={(e)=>{e.preventDefault()}}>
            <button className="btn-search" onClick={searchHandler}>
                <i className="fas fa-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search"/>
                </i>
            </button>
            <input type="text" className="input-search" placeholder="Type to Search..." value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        </form>
        </div>

    )
}