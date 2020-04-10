<template>
<div>
  <UserAuthForm buttonText="Login" :submitForm="loginUser" :signIn="login" signup="Signup"/>
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
          this.$auth.$state.loggedIn = true
          this.$store.state.auth.loggedIn = true;
          this.$store.state.auth.user = logininfo
          //this.$store.state.auth.setStrategy = 'local'
          console.log(this.$store)
        }).catch(function (error) {
             console.log(error)
           })
         ;
         this.$axios.post('http://localhost:3000/login', logininfo)
           .then(function (response) {
             console.log('ATEM')
           })
      },


    }
  };//

</script>


<style scoped>

</style>



