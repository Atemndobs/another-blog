import { requests } from "../ajent";

import {
    BLOG_POST_LIST_ADD, 
    BLOG_POST_LIST_REQUST, 
    BLOG_POST_LIST_RECIEVED, 
    BLOG_POST_LIST_ERROR,
    BLOG_POST_RECIEVED,
    BLOG_POST_REQUST, 
    BLOG_POST_ERROR 
}  from "./constants" ;



export const blogPostListRequest = () => ({
    type: BLOG_POST_LIST_REQUST,

});

export const blogPostListError = () => ({
    type: BLOG_POST_LIST_ERROR,

});


export const blogPostListReceieved = (data) => ({
    type: BLOG_POST_LIST_RECIEVED,
    data
});



export const blogPostListFetch = () => {
    return (dispatch) => {
        dispatch(blogPostListRequest());
        return requests.get('/blog_posts')
        .then(response => dispatch(blogPostListReceieved(response))
            ).catch(error => dispatch(blogPostListError(error)))

    }
};

export const blogPostRequest = () => ({
    type: BLOG_POST_REQUST,
})

export const blogPostError = () => ({
    type: BLOG_POST_ERROR,

});


export const blogPostReceieved = (data) => ({
    type: BLOG_POST_RECIEVED,
    data
});


export const blogPostFetch = (id) => {
    return (dispatch) => {
        dispatch(blogPostRequest());
        return requests.get(`/blog_posts/${id}`)
        .then(response => dispatch(blogPostReceieved(response))
            ).catch(error => dispatch(blogPostError(error)))

    }
};


export const blogPostAdd = () => ({
    type: BLOG_POST_LIST_ADD,
    data : {
        id: Math.floor(Math.random()* 100 + 3),
        title: 'New Post ',
        author: ' Man dem'
    }
});