import React, {Component} from "react";

import './post-list-item.css';

const PostListItem = ({label, important, liked, id}) => {

    let classNames = 'app-list-item d-flex justify-content-between';
    if(important) { classNames = classNames + ' important' }
    if(liked) { classNames = classNames + ' like' }


    return (

        <li key={id} className={classNames}>
            
            <span className="app-list-item-label">{label}</span>

            <div className="d-flex justify-content-center allign-items-center">
                
                <button type="button" className="btn-star btn-small">
                    <i className="fa fa-star"></i>
                </button>
                <button type="button" className="btn-star btn-small">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;