<template>
  <div>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" hasName="true" />
  </div>

</template>


<script>

  import UserAuthForm from "../components/UserAuthForm";
  export default {
    name: 'register',
    components: {
      UserAuthForm,
    },

    methods: {
     async registerUser(registrationInfo){
        await this.$axios.post('/users', registrationInfo)
          this.$auth.loginWith('local', {
            data: registrationInfo
          })
      }
    }
  };

</script>


<style scoped>

</style>


