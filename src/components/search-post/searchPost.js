import React, {Component} from "react";

import './search-posts.css';

export default class SearchPost extends Component {

    onValueChange = (e) => {
        const inputStr = e.target.value;
        this.props.onSearchStr(inputStr);
    }

    
    render() {

        return (

            <input 
                 className="form-control search-input" 
                 type="text" 
                 placeholder='Type First letters of some of post words ...'
                 onChange={ this.onValueChange }>
    
            </input>
        )
    }
}

