<template>
  <form @submit.prevent="onSubmit">
    <mdb-input  v-model="text" placeholder=" e.g corona..." label="Search Posts"
                type="text" class="mt-0"/>
<!--    <input class="form-control" type="text"   placeholder=" e.g corona..." aria-label="Search Posts"/>-->
    <mdb-btn color="primary" type="submit" value="Search Posts "> ✈ Search Post</mdb-btn>



  </form>
</template>


<script>
  import { mdbInput, mdbBtn} from 'mdbvue';
export default {
  name: "SearchPosts",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("search-text", this.text);
      this.text = "";
    }
  },
  components: {
    mdbInput,
    mdbBtn,

  }

};
</script>

<style>
</style>



// https://127.0.0.1:8000/admin/?action=search&entity=BlogPost&sortField=id&sortDirection=DESC&menuIndex=0&submenuIndex=-1&query=Blog
//  name:'mdbSearchEcample',



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
