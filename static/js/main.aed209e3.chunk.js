(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),s=n(9),c=n.n(s),r=n(7),i=n(6),l=n(2),u=n(3),d=n(5),b=n(4),p=(n(15),n(0)),h=function(t){var e=t.postsAmount,n=t.likedPosts;return Object(p.jsxs)("div",{className:"app-header d-flex",children:[Object(p.jsx)("h1",{children:"John Doe"}),Object(p.jsxs)("h2",{children:[" ",e," records, from them ",n," liked ones"]})]})},j=(n(17),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).onValueChange=function(e){var n=e.target.value;t.props.onSearchStr(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"Type First letters of some of post words ...",onChange:this.onValueChange})}}]),n}(o.Component)),f=(n(18),function(t){var e=t.onTogleLikedOnlyShow;return Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("button",{onClick:function(){return e(!1)},type:"button",className:"btn btn-info",children:"All Posts"}),Object(p.jsx)("button",{onClick:function(){return e(!0)},type:"button",className:"btn btn-outline-secondary",children:"Liked Posts"})]})}),m=n(10),O=(n(19),function(t){var e=t.label,n=t.important,o=t.liked,a=t.onTogleImportant,s=t.onTogleLike,c=t.onPostDelete,r=(t.id,"app-list-item d-flex justify-content-between");return n&&(r+=" important"),o&&(r+=" like"),Object(p.jsxs)("div",{className:r,children:[Object(p.jsx)("span",{className:"app-list-item-label",onClick:s,children:e}),Object(p.jsxs)("div",{className:"d-flex justify-content-center allign-items-center",children:[Object(p.jsx)("button",{type:"button",className:"btn-star btn-small",onClick:a,children:Object(p.jsx)("i",{className:"fa fa-star"})}),Object(p.jsx)("button",{type:"button",className:"btn-star btn-small",onClick:c,children:Object(p.jsx)("i",{className:"fa fa-trash-o"})}),Object(p.jsx)("i",{className:"fa fa-heart"})]})]})}),x=(n(20),["id"]),g=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).generateContentFromData=function(e){var n=t.props,o=n.onTogleImportant,a=n.onTogleLike,s=n.onPostDelete;return e.map((function(t){var e=t.id,n=Object(m.a)(t,x);return Object(p.jsx)("li",{className:"list-item",children:Object(p.jsx)(O,Object(i.a)(Object(i.a)({},n),{},{onTogleImportant:function(){o(e)},onTogleLike:function(){a(e)},onPostDelete:function(){s(e)}}))},e)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.posts,e=this.generateContentFromData(t);return Object(p.jsx)("ul",{className:"app-list list-group",children:e})}}]),n}(o.Component),k=(n(21),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={inputTxt:""},t.onValueChange_0__Example=function(e){t.setState((function(t){t.inputTxt;return{inputTxt:e.target.value}}))},t.onValueChange=function(e){t.setState({inputTxt:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onPostAdd(t.state.inputTxt),t.setState({inputTxt:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:"d-flex bottom-panel",onSubmit:this.onSubmit,children:[Object(p.jsx)("input",{className:"form-control new-post-label",placeholder:"Input Your New Message ...",type:"text",onChange:this.onValueChange,value:this.state.inputTxt}),Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"submit",children:"Send"})]})}}]),n}(o.Component)),S=(n(22),function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={data:[{label:"Some Post 0",important:!1,liked:!1,id:0},{label:"Some Post 1",important:!0,liked:!1,id:1},{label:"Some Post 1",important:!0,liked:!1,id:2},{label:"Some Post 2",important:!1,liked:!0,id:3},{label:"Some Post 3",important:!1,liked:!0,id:4}],maxId:4,showLikedPostsOnly:!1,searchStr:""},t.togleStateArrParam=function(e,n){console.log("ID of ".concat(e," Post Toggled: ").concat(n)),t.setState((function(t){var o,a=t.data,s=a.findIndex((function(t){return t.id===n})),c=a[s];return"important"===e?o=Object(i.a)(Object(i.a)({},c),{},{important:!c.important}):"liked"===e&&(o=Object(i.a)(Object(i.a)({},c),{},{liked:!c.liked})),{data:[].concat(Object(r.a)(a.slice(0,s)),[o],Object(r.a)(a.slice(s+1)))}}))},t.onTogleImportant=function(e){t.togleStateArrParam("important",e)},t.onTogleLike=function(e){t.togleStateArrParam("liked",e)},t.onPostDelete=function(e){console.log("ID of DELETED Post: ".concat(e)),t.setState((function(t){var n=t.data,o=n.findIndex((function(t){return t.id===e})),a=Object(r.a)(n.slice(0,o)),s=Object(r.a)(n.slice(o+1));return{data:[].concat(Object(r.a)(a),Object(r.a)(s))}}))},t.onPostAdd=function(e){console.log("App -> Label (Text) of Added Post: ".concat(e)),t.setState((function(n){var o=n.data,a=t.state.maxId,s={label:"".concat(e),important:!1,liked:!1,id:++a};return{data:[].concat(Object(r.a)(o),[s]),maxId:++a}}))},t.onTogleLikedOnlyShow=function(e){t.setState({showLikedPostsOnly:e}),console.log("App -> showLikedPostsOnly: ".concat(t.state.showLikedPostsOnly))},t.onSearchStateStrChange=function(e){t.setState({searchStr:e}),console.log("App -> searchStr: ".concat(t.state.searchStr))},t.showLikedPosts=function(t){return t.filter((function(t){return t.liked}))},t.showPostsBySearchStr=function(t,e){return t.filter((function(t){return t.label.indexOf(e)>-1}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.data,n=t.showLikedPostsOnly,o=t.searchStr,a=e;n&&(a=this.showLikedPosts(e)),""!==o&&(a=this.showPostsBySearchStr(a,o));var s=a.length,c=a.filter((function(t){return t.liked})).length;return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(h,{postsAmount:s,likedPosts:c}),Object(p.jsxs)("div",{className:"search-panel d-flex",children:[Object(p.jsx)(j,{onSearchStr:this.onSearchStateStrChange}),Object(p.jsx)(f,{onTogleLikedOnlyShow:this.onTogleLikedOnlyShow})]}),Object(p.jsx)(g,{posts:a,onTogleImportant:this.onTogleImportant,onTogleLike:this.onTogleLike,onPostDelete:this.onPostDelete}),Object(p.jsx)(k,{onPostAdd:this.onPostAdd})]})}}]),n}(o.Component));n(23);c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.aed209e3.chunk.js.map