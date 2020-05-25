<template>
  <div>
    <mdb-input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p></mdb-input>

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <mdb-input v-model="message" placeholder="add multiple lines"></mdb-input>

    <nuxt-link to="/blogposts">
      <mdb-btn color="primary">👈 Back To Posts</mdb-btn>
    </nuxt-link>
    <mdb-alert color="success" v-if="success">
      You successfully edited your post. <nuxt-link :to="`/blogposts/${post.id}`">view your changes

    </nuxt-link>
    </mdb-alert>
    <mdb-alert color="danger" v-if="error">
      Access Denied. You are not authorized to edit this content.<a href="/blogposts" class="alert-link">back to all posts</a>.
    </mdb-alert>
    <div class="joke">
      <mdb-card>
        <mdb-card-body>
          <div v-if="postEditId == post.id">

            <mdb-input :value="post.title"
                       :id="`post-title-${post.id}`"
                       @blur="setTitle(post)"
                       @keydown.enter="setTitle(post)"
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
  import {mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn, mdbInput, mdbAlert} from 'mdbvue';

  import {mapState} from 'vuex'
  import AppHeader from "../../../components/AppHeader";

  export default {
    data() {
      return {
        postEditId: '',
        success: false,
      };
    },
    computed: {
      ...mapState({
        post: state => state.currentPost
      }),

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
        console.log(this.$auth.$state.loggedIn )
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
        .then((response) => {
          //this.$store.dispatch('updatePostTitle', {post});
          console.log(response.status)
          this.postEditId = '';
          this.success = true
        }).catch(function (error) {
          error
              alert(' Access Denied! You are not authorized to edit this content');
            })

        },

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
      mdbAlert
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
