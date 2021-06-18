import React, {Component} from "react";

import PostListItem from "./post-list-item/postListItem.js";

import './post-list.css';

export default class PostList extends Component {

    generateContentFromData = ( data ) => {
        const {onTogleImportant, onTogleLike, onDelete} = this.props;

        return data.map( ({ id , ...propsFromJsom}) => { // From item => Decomposed
            return <li key={id} className="list-item">
                
                < PostListItem {...propsFromJsom} onTogleImportant={() => {onTogleImportant(id)}}
                                                  onTogleLike={() => {onTogleLike(id)}} 
                                                  onDelete={() => {onDelete(id)}} />
            </li>
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
