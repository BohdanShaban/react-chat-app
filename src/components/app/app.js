import React , {Component} from 'react';

import AppHeader from '../app-header/appHeader.js'
import SearchPost from '../search-post/searchPost.js'
import PostStatusFilter from '../post-status-filter/postStatusFilter.js'
import PostList from '../post-list/postList.js';
import PostAddForm from '../post-add-form/postAddForm.js';

import './app.css'

export default class App extends Component {



    render() {

        return (
           <div className="app">
               < AppHeader />
               <div className="d-flex">
                    < SearchPost />
                    < PostStatusFilter />
               </div>
                < PostList />
                < PostAddForm />
           </div>
        )
    }
}
