<template>
  <div>

    <nuxt-link to="/blogposts">
      <mdb-btn color="primary">👈 Back To Posts</mdb-btn>
    </nuxt-link>
    <div class="joke">
      <mdb-card>
        <mdb-card-body>
          <div v-if="postEditId == post.id">
            <mdb-input v-model="$store.state.currentPost.title"
                       :id="`post-edit-${post.id}`"
                       @blur="updatePostTitle(post)"
                       @keydown.enter="updatePostTitle(post)"


                       label="Edit Post"
                       type="text" class="mt-0"
            />
          </div>
          <div v-else @click="setToEditId(post)">
            <mdb-card-title>{{ $store.state.currentPost.title }}</mdb-card-title>
          </div>
          <mdb-card-text>{{ $store.state.currentPost.content }}</mdb-card-text>
          <mdb-card-text>
            published : {{$store.state.currentPostTime }} | by
            {{ $store.state.currentPost.author.name }}

          </mdb-card-text>
          <mdb-card-text></mdb-card-text>
        </mdb-card-body>
        <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg"
                        alt="Card image cap"></mdb-card-image>
      </mdb-card>
    </div>
  </div>
</template>

<script>
  //import axios from "axios";

  import {mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput} from 'mdbvue';

  import  {mapState} from 'vuex'

  export default {
    data() {
      return {
        post: {},
        postEditId: ''
      };
    },

    head() {
      return {
        title: this.$store.state.currentPost.title,
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Details for : " + this.$store.state.currentPost.content
          }
        ]
      };
    },

    /*  async created() {
        const config = {
          headers: {
            Accept: "application/json"
          }
        };

        try {
          const res = await axios.get(
            `https://127.0.0.1:8000/api/blog_posts/${this.$route.params.id}`,
            config
          );

          this.post = res.data;
        } catch (err) {
          console.log(err);
        }
      },
      */

    /*async asyncData({$axios, params}){
      let response = await $axios.get(`/blog_posts/${params.id}`);
      let post = response.data;
      return {
        post
      }*/

    async fetch({$axios, params, store}) {
      let response = await $axios.get(`/blog_posts/${params.id}`);
      let post = response.data;
      store.commit('SET_CURRENT_POST', post);
    },

    computed: {
      ...mapState({
        post : 'currentPost'
      }),
    },


    components: {
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbInput,
    },
    methods: {
      setToEditId(post) {
        this.postEditId = post.id;

        setTimeout(function () {
          const elId = `post-edit-${post.id}`;
          document.getElementById().focus(elId)
        }, 1);
      },

      updatePostTitle(post) {
        this - $store.dispatch('updatePostTitle', {post})
        this.postEditId = '';
      },

    },

  };
</script>

<style>
</style>


