import Api from "@/services/api";
import {format} from 'timeago.js';



export const state = () => ({
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    CREATE_POST(state, {post}) {
      state.posts = state.posts.concat(post);
    },
    UPDATE_POST_TITLE(state, {post}) {
      let postToUpdate = state.posts.find(p => p.id == post.id)
      postToUpdate.title = post.title
    },
    UPDATE_POST_CONTENT(state, {post}) {
      let postToUpdate = state.posts.find(p => p.id == post.id)
      postToUpdate.content = post.content
    },
    DELETE_POST(state, {post}) {
      state.posts = state.posts.filter(p => p.id != post.id)
    },
    CONNECT_POST_TO_COMMENT(state, {comment, post}) {
      comment.post_ids = comment.post_ids.concat(post.id.toString());
      post.comment_ids = post.comment_ids.concat(comment.id.toString());
    },
    DISCONNECT_POST_FROM_COMMENT(state, {comment, post}) {
      comment.post_ids = comment.post_ids.filter(t_id => t_id != post.id);
      post.comment_ids = post.comment_ids.filter(c_id => c_id != comment.id);
    },
  },
  actions: {
    async loadAll({commit, dispatch}) {
      let response = await Api().get('/blog_posts');
      let tags = response.data.data;
      tags.forEach(p => {
        p.attributes.id = p.id;
        p.attributes.comment_ids = p.relationships.comments.data.map(c => c.id);
      });
      commit('SET_POSTS', posts.map(p => p.attributes));
    },
    connectToComment({commit}, {comment, post}) {
      Api().post(`/blog_posts/${id}/comments`, {
        comment_id: comment.id,
        post_id: post.id
      });
      commit('CONNECT_POST_TO_COMMENT', {comment, post});
    },
    disconnectPostFromComment({commit}, {comment, post}) {
      Api().post(`/blog_posts/${id}/comments`, {
        comment_id: comment.id,
        post_id: post.id
      });
      commit('DISCONNECT_POST_FROM_COMMENT', {comment, post});
    },
    async create({commit}, {title}) {
      let response = await Api().post('/blog_posts', {title});
      let createdPost = response.data.data.attributes;
      createdPost.id = response.data.data.id;
      createdPost.comment_ids = [];
      commit('CREATE_POST', {Post: createdPost});
      return createdPost;
    },
    async updateTitle({commit}, {post}) {
      Api().put(`/blog_posts/${post.id}`, post)
      commit('UPDATE_POST_TITLE', {post});
    },
    delete({commit}, {post}) {
      Api().delete(`/blog_posts/${post.id}`);
      commit('DELETE_POST', {post})
    }
  },
  getters: {
    get: state => id => {
      return state.posts.find(p => p.id == id)
    },
  }
})
