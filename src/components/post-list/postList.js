import React, {Component} from "react";

import PostListItem from "./post-list-item/postListItem.js";

import './post-list.css';

const PostList = () => {


    return (
        <ul className="app-list list-group">
            < PostListItem />
            < PostListItem />
            < PostListItem />
        </ul>
    )
}

export default PostList;