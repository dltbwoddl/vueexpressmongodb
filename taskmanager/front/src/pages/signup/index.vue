<template>
  <div class="mt-4">
    <b-form @submit.prevent="onSubmit()">
      <ValidationProvider
          name="Name"
          rules="required"
          v-slot="{errors}"  
      >
      <b-form-group
        id="input-group-1"
        label="Name:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <span>{{errors[0]}}</span>
      </ValidationProvider>

    <b-form-group
        id="input-group-2"
        label="Email address:"
        label-for="input-2"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Your password:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Confirm password:" label-for="input-4">
        <b-form-input
          id="input-4"
          type="password"
          v-model="form.ConfirmPassword"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Sign up</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';
import {ValidationProvider} from 'vee-validate';
export default {
  components:{
    ValidationProvider
  },
    data(){
        return{
            form:{
                email :'',
                password : '',
                name : '',
                ConfirmPassword : ''
            }
        }
    },
    methods:{
        async onSubmit(){
          try{
          await axios.post('http://localhost:3000/auth/signup',{
            email : this.form.email,
            password : this.form.password,
            name : this.form.name
          })

          this.$router.push({path : '/login'})
          } catch(err){
            console.log(err)
          }
        }
    }
}
</script>

<style>

</style>