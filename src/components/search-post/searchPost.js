import React, {Component} from "react";

import './search-posts.css';

const SearchPost = () => {

    return (
        <form className="search-panel">

            <input className="form-control .search-input" placeholder='Type First letters in post You Want to Find...'></input>
            
        </form>
    )
}

export default SearchPost