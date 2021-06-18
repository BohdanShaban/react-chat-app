import React, {Component} from "react";

import './app-header.css'

const AppHeader = ({postsAmount, likedPosts}) => {

    return (
        <div className = "app-header d-flex">
            
            <h1>John Doe</h1>
            <h2> {postsAmount} records, from them {likedPosts} liked ones</h2>
        </div>
    )
}

export default AppHeader;