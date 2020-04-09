<template>
  <div>

    <nuxt-link to="/blogposts">
      <mdb-btn color="primary">👈 Back To Posts</mdb-btn>
    </nuxt-link>
    <div class="joke">
      <mdb-card>
        <mdb-card-body>
          <div v-if="postEditId == post.id">

            <mdb-input :value="post.title"
                       :id="`post-title-${post.id}`"
                       @blur="setTitle(post)"
                       label="Edit Title"
                       type="text" class="mt-0"
            />
            <mdb-input :value="post.content"
                       :id="`post-content-${post.id}`"
                       @blur="setTitle(post) "
                       label="Edit Comment"
                       type="text" class="mt-0"
            />
            <mdb-input :value="post.published"
                       :id="`post-published-${post.id}`"
                       @blur="setTitle(post) "
                       label="Edit time"
                       type="text" class="mt-0"
            />
            <mdb-btn  @click="updatePostTitle(post)">Edit</mdb-btn>



          </div>
          <div v-else @click="setToEditId(post)">
            <mdb-card-title>{{ post.title }}</mdb-card-title>
            <mdb-card-text>{{ post.content }}</mdb-card-text>
          </div>

          <mdb-card-text>
            published : {{$store.state.currentPostTime }} | by
            {{ post.author.name }}

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
  import {mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput} from 'mdbvue';

  import {mapState} from 'vuex'
  import AppHeader from "../../../components/AppHeader";

  export default {
    data() {
      return {
        postEditId: ''
      };
    },
    computed: {
      ...mapState({
        post: state => state.currentPost
      })
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

/*    async asyncData({$axios, params}){
      let response = await $axios.get(`/blog_posts/${params.id}`);
      let post = response.data;
      return {
        post
      }},*/


    async fetch({$axios, params, store}) {
      let response = await $axios.get(`/blog_posts/${params.id}`);
      let post = response.data;
      store.commit('SET_CURRENT_POST', post);
    },


    methods: {
      setToEditId(post) {
        this.postEditId = post.id;
        setTimeout(function () {
          const elId = `post-title-${post.id}`;
          document.getElementById(elId).focus()
        }, 1);




      },

      setTitle(post) {
        let title =  document.getElementById(`post-title-${post.id}`).value;
        let content =  document.getElementById(`post-content-${post.id}`).value;
        let published =  document.getElementById(`post-published-${post.id}`).value;

        let params = {
          id : post.id,
          title : title,
          content : content,
          published: published
        };
        return params;
      },

/*      updatePostTitle(post) {
        let params = this.setTitle(post)
       // console.log(params)
        this.$store.dispatch('updatePostTitle', {post});
        this.postEditId = ''
      },*/


      async updatePostTitle(post) {
          await this.$axios.put(`/blog_posts/${post.id}`, this.setTitle(post))
        //this.$store.dispatch('updatePostTitle', {post});
        this.postEditId = ''
        console.log(this.setTitle(post))
        }


      },

    components: {
      AppHeader,
      mdbCard,
      mdbCardImage,
      mdbCardBody,
      mdbCardTitle,
      mdbCardText,
      mdbBtn,
      mdbInput,
    },
  };
</script>

<style>
</style>



<!--
@blur="updatePostTitle(post)"
@keydown.enter="updatePostTitle(post)"
       //
       // this.postEditId = ''
@keyup.13="updatePostTitle(post)"-->
