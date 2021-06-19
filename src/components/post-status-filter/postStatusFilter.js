import React, {Component} from "react";

import './post-status-filter.css'

const PostStatusFilter = ({onTogleLikedOnlyShow}) => {

    
    return (
        <div className="d-flex align-items-center">

            <button onClick={ () => onTogleLikedOnlyShow(false) } type="button" className="btn btn-info">All Posts</button>
            <button onClick={ () => onTogleLikedOnlyShow(true) } type="button" className="btn btn-outline-secondary">Liked Posts</button>

        </div>
    )
}

export default PostStatusFilter;