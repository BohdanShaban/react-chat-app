import React, {Component} from "react";

import './post-add-form.css';

const PostAddForm = () => {


    return (
        <form className='d-flex bottom-panel'>
            
            <input className="form-control new-post-label" placeholder="Input Your New Message..."></input>
            <button className='btn btn-outline-secondary'>Send</button>

        </form>
    )
}

export default PostAddForm;