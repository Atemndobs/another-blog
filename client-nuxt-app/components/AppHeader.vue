<template>


  <header class="header">
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



  <div>
    <mdb-navbar dark class="indigo">
      <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-form-inline class="ml-auto">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <mdb-btn size="sm" type="submit" class="mr-auto" outline="white">Search</mdb-btn>
          </mdb-form-inline>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <br/>
    <mdb-navbar class="blue-grey lighten-5">
      <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item active>Home</mdb-nav-item>
          <mdb-nav-item>Features</mdb-nav-item>
          <mdb-nav-item>Pricing</mdb-nav-item>
          <!-- Dropdown -->
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle slot="toggle" tag="a" navLink color="blue-gray" waves-fixed>Dropdown</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>Action</mdb-dropdown-item>
              <mdb-dropdown-item>Another action</mdb-dropdown-item>
              <mdb-dropdown-item>Something else here</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-form-inline class="ml-auto">
            <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          </mdb-form-inline>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <br/>
    <mdb-navbar dark class="teal lighten-2">
      <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-form-inline class="ml-auto">
            <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          </mdb-form-inline>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <br/>
    <mdb-navbar dark class="pink lighten-3" href="#/">
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-form-inline class="ml-auto">
            <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <mdb-icon icon="search" class="white-text"/>
          </mdb-form-inline>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
      <mdb-navbar-brand style="order: 3" href="#">Navbar</mdb-navbar-brand>
    </mdb-navbar>
    <br/>
    <mdb-navbar dark class="blue lighten-3" href="#/">
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-form-inline class="ml-auto">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <mdb-btn color="mdb-color" rounded size="sm" class="mr-auto">Search</mdb-btn>
          </mdb-form-inline>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
      <mdb-navbar-brand style="order: 3" href="#">Navbar</mdb-navbar-brand>
    </mdb-navbar>
  </div>
