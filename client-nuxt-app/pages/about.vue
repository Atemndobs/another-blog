<template>
  <div>
    <h1>About BLOG POSTS</h1>
    <p>This nuxt app is fetching Blog posts form a symfony api. The Api is made with symfony 5 and api platform</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About",
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

<style>
</style>
