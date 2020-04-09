import {format} from 'timeago.js';
import Api from "@/services/api";

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

    let param  =
    console.log(postToUpdate)

  },


};

export const actions = {
  async updatePostTitle({commit}, {post}) {
   let send =  await this.$axios.$put(`/blog_posts/${post.id}`, post, {

    }
 )


   // Api().put(`/blog_posts/${post.id}`, post);

    commit('UPDATE_POST_TITLE', {post});
  }
}


/*

async fetch({$axios, params, store}) {
  let response = await $axios.get(`/blog_posts/${params.id}`);
  let post = response.data;
  store.commit('SET_CURRENT_POST', post);
},


async updatePostTitle({commit}, {post}) {

  Api().put(`/blog_posts/${post.id}`, post);

  commit('UPDATE_POST_TITLE', {post});



  export const actions = {
  async GET_CATEGORIES ({commit}) {
    const categories = await this.$axios.$get('http://icanhazip.com')
    commit('SET_CATEGORIES', categories)
  }

*/
