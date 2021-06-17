import React, {Component} from "react";

import './post-status-filter.css'

const PostStatusFilter = () => {

    
    return (
        <div className="d-flex align-items-center">
            <button type="button" className="btn btn-info">All Posts</button>
            <button type="button" className="btn btn-outline-secondary">Liked Posts</button>
        </div>
    )
}

export default PostStatusFilter;