import React, {Component} from "react";

import PostListItem from "./post-list-item/postListItem.js";

import './post-list.css';

export default class PostList extends Component {

    generateContentFromData = ( data ) => {
        const {onTogleImportant, onTogleLike, onPostDelete} = this.props;

        return data.map( ({ id , ...propsFromJsom}) => { // From item => Decomposed
            return <li key={id} className="list-item">

                < PostListItem {...propsFromJsom} onTogleImportant={() => {onTogleImportant(id)}}
                                                  onTogleLike={() => {onTogleLike(id)}} 
                                                  onPostDelete={() => {onPostDelete(id)}} />
            </li>
        })
    }



    render() {

        const {posts} = this.props;
        const content = this.generateContentFromData(posts);
        

        return (
            <ul className="app-list list-group">

                {content}
            </ul>
        )
    }
}
