<template>
  <div>
    <SearchPosts v-on:search-text="searchText"/>
    <BlogPost v-for="post in $store.state.posts" :key="post.id" :id="post.id" :title="post.title"
              :content="post.content"
              :author="post.author.name"/>

  </div>
</template>

<script>
import axios from 'axios'
import BlogPost from "../../components/BlogPost";
import SearchPosts from "../../components/SearchPosts";

export default {
  components: {
    BlogPost,
    SearchPosts
  },
  async fetch({$axios, store}) {
    let response = await $axios.get('/blog_posts');
    let posts = response.data["hydra:member"];
    store.commit('SET_POSTS', posts )

  },
/*  async created() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get("https://127.0.0.1:8000/api/blog_posts", config);

      this.posts = res.data;

    } catch (err) {
      console.log(err);
    }
  },*/


  methods: {
    async searchText(text) {
      const config = {
        headers: {
          Accept: "application/json"
        }
      };

      try {
        const res = await axios.get(
          `https://127.0.0.1:8000/api/${text}`,
          config
        );

        console.log(res.data);
        this.posts = res.data;
      } catch (err) {
        console.log(err);
      }
    },


  },
  head() {
    return {
      title: "BlogPosts",
      meta: [
        {
          hid: "Blog Post Blog",
          name: "Another Blog",
          content: "New Posts "
        }
      ]
    };
  }
};
</script>

<style>
</style>
