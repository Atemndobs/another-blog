import {BLOG_POST_LIST_REQUST, BLOG_POST_LIST_ADD, BLOG_POST_LIST_RECIEVED, BLOG_POST_LIST_ERROR } from "../actions/actions";

export default(state = {
    posts: null,
    isFetching: false
}, action) => {
    switch (action.type) {
        case BLOG_POST_LIST_REQUST:
            state =  {
                ...state,
                isFetching:true
            };
            console.log(state);
            return state;
        case BLOG_POST_LIST_RECIEVED:
            state =  {
                ...state,
                posts: action.data,
                isFetching: false
            };
            console.log(state);
            return state;
        case BLOG_POST_LIST_ERROR:
            state =  {
                ...state,
                isFetching: false,
                posts: null
            };
            console.log(state);
            return state;
        case BLOG_POST_LIST_ADD:
            state =  {
                ...state,
                posts: state.posts ?  state.posts.concat(action.data) : state.posts
            };
            console.log(state);
            return state;
    
        default:
            return state;
    }
}