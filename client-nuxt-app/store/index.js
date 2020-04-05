import {format} from 'timeago.js';


export const state = () => ({
  posts : [],
  currentPost : {},
  currentPostTime : ''
});

export const mutations = {
  SET_POSTS(state, posts){
    state.posts = posts;
  },

  SET_CURRENT_POST (state, post) {
    state.currentPost = post;
    state.currentPostTime = format(post.published, 'en-US')
  }
};
