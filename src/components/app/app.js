import React , {Component} from 'react';

import AppHeader from '../app-header/appHeader.js'
import SearchPost from '../search-post/searchPost.js'
import PostStatusFilter from '../post-status-filter/postStatusFilter.js'
import PostList from '../post-list/postList.js';
import PostAddForm from '../post-add-form/postAddForm.js';

import './app.css';

export default class App extends Component {

    state = {
        data: [
            { label: 'Some Post 0', important: true,  liked: false,  id: 0 },
            { label: 'Some Post 1', important: false, liked: true,  id: 1 },
            { label: 'Some Post 2', important: false, liked: false, id: 2 },
            { label: 'Some Post 3', important: true, liked: false, id: 3 }
        ]
    }

    togleStateArrParam = (param, id) => {
        console.log(`ID of ${param} Post Toggled: ${id}`);
        
        this.setState( ({data}) => {
            const idx = data.findIndex( item => item.id === id);

            const oldElem = data[idx];

            let newElem; // In Imperative Style —> ??? param: !oldElem.PARAM ???
            if( param === 'important') { newElem = { ...oldElem, important: !oldElem.important}; }
            else if( param === 'liked' ) { newElem = { ...oldElem, liked: !oldElem.liked}; }

            const newArr = [ ...data.slice(0, idx), newElem, ...data.slice(idx + 1)];

            return { data: newArr }; // IMMUTABLE
        })
    }

    onTogleImportant = (id) => {
        this.togleStateArrParam( 'important', id);
    }

    onTogleLike = (id) => {
        this.togleStateArrParam( 'liked', id);
    }

    onDelete = (id) => {
        console.log(`ID of DELETED Post: ${id}`);

        this.setState( ({data}) => {
            const idx = data.findIndex( item => item.id === id);

            const beforeArr = [...data.slice(0, idx)];
            const afterArr  = [...data.slice(idx + 1)];

            const newArr = [ ...beforeArr, ...afterArr];

            return { data: newArr }; // IMMUTABLE
        })
    }

    render() {

        const {data} = this.state;

        return (
           <div className="app">
               < AppHeader />
               <div className="search-panel d-flex">
                    < SearchPost />
                    < PostStatusFilter />
               </div>
                < PostList  data={data} 
                            onTogleImportant={this.onTogleImportant}
                            onTogleLike={this.onTogleLike}
                            onDelete={this.onDelete} />
                < PostAddForm />
           </div>
        )
    }
}
