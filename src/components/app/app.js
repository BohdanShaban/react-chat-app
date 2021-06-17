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
            { label: 'Some Post 0', important: true, liked: false, id: 0 },
            { label: 'Some Post 1', important: false, liked: true, id: 1 },
            { label: 'Some Post 2', important: false, liked: false, id: 2 }
        ]
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
                < PostList data={data}/>
                < PostAddForm />
           </div>
        )
    }
}
