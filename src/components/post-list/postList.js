import React, {Component} from "react";

import PostListItem from "./post-list-item/postListItem.js";

import './post-list.css';

export default class PostList extends Component {

    constructor(props) {
        super(props);

        this.someVar = 3; 
    }
    
    generateContentFromData = ( data ) => {
        return data.map( ({label, important, liked, id}) => {
            return < PostListItem label={label} important={important} liked={liked} id={id}/>
        })
    }

    render() {

        const {data} = this.props;

        const content = this.generateContentFromData(data);
        

        return (
            <ul className="app-list list-group">

                {content}
            </ul>
        )
    }
}
