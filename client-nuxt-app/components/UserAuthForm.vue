<template>
  <section class="form-elegant" v-model="valid">
    <mdb-row>
      <mdb-col md="5">
        <mdb-card>
          <mdb-card-body class="mx-4">
            <div class="text-center">
              <h3 class="dark-grey-text mb-5"><strong>{{buttonText}}</strong></h3>
            </div>
            <mdb-input label="Name" type="name" v-model="userInfo.name"
                       :rules="[required('name')]"
                       v-if="hasName"
            />
            <mdb-input label="Username" type="username" v-model="userInfo.username"
                     :rules="[required('email'), emailFormat()]"

            />
            <mdb-input label="email" type="email" v-model="userInfo.email"
                       :rules="[required('email'), emailFormat()]"

            />
            <mdb-input label="password" type="password" containerClass="mb-0"
                       v-model="userInfo.password"
                       :type="showPassword ? 'text' : 'password'"
                       :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                       @click:append="showPassword = !showPassword" counter=true
                       :rules="[required('password'), minLength('password', 8)]"

            />
            <p class="font-small blue-text d-flex justify-content-end pb-3">Forgot <a href="#" class="blue-text ml-1"> Password?</a></p>
            <div class="text-center mb-3">
              <mdb-btn type="button"  gradient="blue"  rounded class="btn-block z-depth-1a" @click="submitForm(userInfo)" >{{ buttonText }}</mdb-btn>
            </div>
            <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p>
            <div class="row my-3 d-flex justify-content-center">
              <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab icon="facebook" class="blue-text text-center"/></mdb-btn>
              <mdb-btn type="button" color="white" rounded class="mr-md-3 z-depth-1a"><mdb-icon fab icon="twitter" class="blue-text"/></mdb-btn>
              <mdb-btn type="button" color="white" rounded class="z-depth-1a"><mdb-icon fab icon="google-plus" class="blue-text"/></mdb-btn>
            </div>
          </mdb-card-body>
          <mdb-modal-footer class="mx-5 pt-3 mb-1">
            <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="/register" class="blue-text ml-1"> Sign Up</a></p>
          </mdb-modal-footer>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>

</template>


<script>
  import validations from "../utils/validations";
  import {
    mdbContainer,
    mdbInput,
    mdbCard,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbIcon,
    mdbBtn,
    mdbRow,
    mdbCol
  } from 'mdbvue';


  export default {
    name: 'login',
    components: {
      mdbContainer,
      mdbInput,
      mdbCard,
      mdbCardHeader,
      mdbCardTitle,
      mdbCardBody,
      mdbCardText,
      mdbIcon,
      mdbBtn,
      mdbRow,
      mdbCol
    },
    data() {
      return {
        fields: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
        valid: false,
        showPassword: false,
        userInfo: {
          username: 'atemkeng',
          password: 'Atem1234',

        },
        ...validations
      }
    },

    props: ["submitForm", "buttonText", "hasName"],

    methods: {

    }
  };

</script>

style
<style scoped>

</style>

