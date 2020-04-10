<template>
  <nuxt-link :to="'blogposts/'+ id" v-if="$auth.token">
    <div class="joke">
      <mdb-card>
 <!--  <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%286%29.jpg" alt="Card image cap"></mdb-card-image>-->
        <mdb-card-body>
          <mdb-card-title>{{ title }}</mdb-card-title>
          <mdb-card-text>{{ content }}</mdb-card-text>
          <mdb-card-text>{{ comment }}</mdb-card-text>
          <mdb-card-text>{{ author }}</mdb-card-text>
          <mdb-btn color="primary">Reed More</mdb-btn>
        </mdb-card-body>
      </mdb-card>
    </div>
  </nuxt-link>
</template>

<script>

  import { mdbCard, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbBtn } from 'mdbvue';
export default {
  name: "BlogPost",
  props: ["title", "id", "comment", "content", "author"],
  components: {
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn
  }
};
</script>

<style>
.joke {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
