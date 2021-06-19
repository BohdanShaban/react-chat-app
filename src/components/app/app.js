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
            { label: 'Some Post 0', important: false,  liked: false,  id: 0 },
            { label: 'Some Post 1', important: true, liked: false,  id: 1 },
            { label: 'Some Post 1', important: true, liked: false,  id: 2 },
            { label: 'Some Post 2', important: false, liked: true, id: 3 },
            { label: 'Some Post 3', important: false, liked: true, id: 4 }
        ],
        maxId: 4,
        showLikedPostsOnly: false
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

    onPostDelete = (id) => {
        console.log(`ID of DELETED Post: ${id}`);

        this.setState( ({data}) => {
            const idx = data.findIndex( item => item.id === id);

            const beforeArr = [...data.slice(0, idx)];
            const afterArr  = [...data.slice(idx + 1)];

            const newArr = [ ...beforeArr, ...afterArr];

            return { data: newArr }; // IMMUTABLE
        })
    }

    onPostAdd = (label) => {
        console.log(`Label (Text) of Added Post: ${label}`);

        this.setState( ({data}) => { 
            let {maxId} = this.state;
            const newElem  = { label: `${label}`, important: false, liked: false, id: ++maxId };
            const newArr = [ ...data, newElem];

            return { data: newArr, maxId: ++maxId }; // IMMUTABLE
        })
    }

    onTogleLikedOnlyShow = (boolParam) => {
        this.setState( {showLikedPostsOnly: boolParam} );
        console.log( `showLikedPostsOnly: ${this.state.showLikedPostsOnly}`);
    }

    dataInStateUpd = (data) => {

        // !!!!! LOGIC MISTAKE !!!!!  —>  render() -> setState()  &  setState() -> render()

        // this.setState( ({data}) => { 
        //     const newData = data.filter( item => item.liked);
        //     return { data: newData };
        // })

        return data.filter(item => item.like)
    }


    render() {

        const {data, showLikedPostsOnly} = this.state;
        let visiblePosts = data;

        if (showLikedPostsOnly) { // !!!!! LOGIC MISTAKE !!!!!  —>  render() -> setState()  &  setState() -> render()
            visiblePosts = this.dataInStateUpd(data);
        }

        const postsAmount = data.length;
        const likedPosts = data.filter( item => item.liked).length;


        return (
           <div className="app">
               < AppHeader postsAmount={postsAmount} likedPosts={likedPosts} />
               <div className="search-panel d-flex">
                    < SearchPost />
                    < PostStatusFilter onTogleLikedOnlyShow={this.onTogleLikedOnlyShow} />
               </div>
                < PostList  posts={visiblePosts} 
                            onTogleImportant={this.onTogleImportant}
                            onTogleLike={this.onTogleLike}
                            onPostDelete={this.onPostDelete} />
                < PostAddForm onPostAdd={this.onPostAdd} />
           </div>
        )
    }
}
