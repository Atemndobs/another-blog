<template>
<div>
  <UserAuthForm buttonText="Login" :submitForm="loginUser" :signIn="login"/>
</div>

</template>


<script>

import UserAuthForm from "../components/UserAuthForm";
  export default {
    name: 'login',
    components: {
      UserAuthForm

    },

    methods: {

      async loginUser(logininfo){
         await this.$auth.loginWith('local', {
          data: logininfo
        })
        .then(() => {
          this.$store.state.auth.loggedIn = true;
          this.$store.state.auth.user = logininfo
          this.$store.state.auth.strategy = 'local'
          console.log(this.$auth)
        });


         this.$axios.post('http://localhost:3000/login', logininfo)
           .then(function (response) {
            // response.config.data =
             console.log('ATEM')
             console.log($auth );
           })
      },
    }
  };

</script>


<style scoped>

</style>



