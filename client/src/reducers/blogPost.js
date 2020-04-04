import {BLOG_POST_REQUST, BLOG_POST_RECIEVED, BLOG_POST_ERROR } from "../actions/constants";

export default(state = {
    posts: null,
    isFetching: false
}, action) => {
    switch (action.type) {
        case BLOG_POST_REQUST:
            return {
                ...state,
                isFetching:true
            };
            
        case BLOG_POST_RECIEVED:
            return {
                ...state,
                posts: action.data,
                isFetching: false
            };
            
        case BLOG_POST_ERROR:
            return {
                ...state,
                isFetching: false,
                posts: null
            };
        default:
            return state;
        
    }
}