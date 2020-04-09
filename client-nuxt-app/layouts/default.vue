<template>

  <div >
    <!--/.Navbar -->
    <mdb-navbar expand="large" dark color="stylish">
      <mdb-navbar-brand href="#">
     <!--   Navbar[logo]-->
      </mdb-navbar-brand>
      <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <ul class="navbar-nav mr-auto">
          <mdb-nav-item href="/" active>Home</mdb-nav-item>
          <mdb-nav-item href="/blogposts">All posts</mdb-nav-item>
          </ul>
   <!--       <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="stylish" slot="toggle" waves-fixed
                                  > Dropdown
            </mdb-dropdown-toggle>
            <mdb-dropdown-menu >
              <mdb-dropdown-item>Action</mdb-dropdown-item>
              <mdb-dropdown-item>Another action</mdb-dropdown-item>
              <mdb-dropdown-item>Something else here</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>-->
        </mdb-navbar-nav>

        <div v-if="$auth.loggedIn">
           {{$auth.user.username}}
          <mdb-btn  @click="$auth.logout">Logout</mdb-btn>
          <ul class="navbar-nav ml-auto nav-flex-icons">
            <mdb-nav-item href="#">  <i class="fab fa-twitter"></i></mdb-nav-item>
            <mdb-nav-item href="#"> <i class="fab fa-google-plus-g"></i></mdb-nav-item>
            <mdb-nav-item href="#"> <i class="fas fa-user"></i></mdb-nav-item>
          </ul>
        </div>
        <div v-else>
          <nuxt-link to="/login"> <mdb-btn  @click="">Login</mdb-btn></nuxt-link>
          <nuxt-link to="/register"> <mdb-btn  @click="">register</mdb-btn></nuxt-link>
        </div>

      </mdb-navbar-toggler>
      </div>

    </mdb-navbar>

    <div class="container">
    <nuxt/>
    </div>
  </div>
</template>

<script>

  import { mdbInput, mdbBtn, mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbFormInline, mdbNavItem, mdbDropdown, mdbDropdownToggle, mdbNavbarMenu, mdbDropdownItem, mdbIcon } from 'mdbvue';

  export default {

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
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    background: #f4f4f4;
  }

  a {
    color: #666;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container {
    max-width: 800px;
    margin: 2rem auto;
    overflow: hidden;
    padding: 1rem 2rem;
    background: #fff;
  }
</style>

