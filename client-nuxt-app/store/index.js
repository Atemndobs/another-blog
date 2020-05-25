import {format} from 'timeago.js';

export const strict = false;

export const state = () => ({
  posts : [],
  currentPost : {},
  currentPostTime : '',

});

export const getters = {
}

export const mutations = {
  SET_POSTS(state, posts){
    state.posts = posts;
  },

  SET_CURRENT_POST (state, post) {
    state.currentPost = post;
    state.currentPostTime = format(post.published, 'en-US')
  },

  UPDATE_POST_TITLE (state, post) {
    let  postToUpdate = state.posts.find(p => p.id == post.id);
    postToUpdate =   post.post;

  },


};

export const actions = {
  async updatePostTitle({commit}, {post}) {
   let send =  await this.$axios.$put(`/blog_posts/${post.id}`, post, {

    }
 )

    commit('UPDATE_POST_TITLE', {post});
  }
}

