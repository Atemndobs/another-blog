<template>
  <header >
    <h1 class="title">In the loop</h1>
    <ul>
    <div>
      <nuxt-link to="/">
        <mdb-btn tag="a" gradient="purple" floating size="lg"><mdb-icon icon="home"/></mdb-btn></nuxt-link>
      <nuxt-link to="/blogposts">
        <mdb-btn tag="a" gradient="peach" floating size="lg"><mdb-icon />👿</mdb-btn></nuxt-link>
      <nuxt-link to="/about"> <mdb-btn tag="a" gradient="blue" floating size="lg"><mdb-icon />💨</mdb-btn></nuxt-link>
    </div>
    </ul>
  </header>
</template>
<script>
  import { mdbInput, mdbBtn, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbFormInline, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbNavbarMenu, mdbDropdownItem, mdbIcon } from 'mdbvue';
export default {
  name: "AppHeader",
  components: {
    mdbInput,
    mdbBtn,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbFormInline,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownToggle,
    mdbNavbarMenu,
    mdbDropdownItem,
    mdbIcon
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px dotted #ccc;
}

.header .title {
  font-size: 3rem;
  color: #526488;
}

.header ul {
  display: flex;
}

/*.header a {
  display: inline-block;
  background: #333;
  color: #fff;
  padding: 0.3rem 1rem;
  margin-right: 0.5rem;
}*/
</style>




