<template>
  <div>
    <h2>Welcome to the mos recent news in your local area</h2>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Welcome To BlogPosts",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Blog Posts from my Symfony API"
        }
      ]
    };
  }
};
</script>
