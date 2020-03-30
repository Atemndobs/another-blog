import { requests } from "../ajent";



export const BLOG_POST_LIST_RECIEVED = 'BLOG_POST_LIST_RECIEVED';
export const BLOG_POST_LIST_ERROR = 'BLOG_POST_LIST_ERROR';
export const BLOG_POST_LIST_ADD = 'BLOG_POST_LIST_ADD';
export const BLOG_POST_LIST_REQUST = 'BLOG_POST_LIST_REQUST';

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

export const blogPostAdd = () => ({
    type: BLOG_POST_LIST_ADD,
    data : {
        id: Math.floor(Math.random()* 100 + 3),
        title: 'New Post ',
        author: ' Man dem'
    }
});