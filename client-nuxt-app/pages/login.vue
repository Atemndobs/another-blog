<template>
<div>
  <UserAuthForm buttonText="Login" :submitForm="loginUser"/>
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

      loginUser(logininfo){

        this.$auth.loginWith('local', {
          data: logininfo
        })
          .then(() => this.$toast.success('Logged In!')
          )
        console.log(this.$auth.loggedIn)
      }

    }
  };

</script>


<style scoped>

</style>


