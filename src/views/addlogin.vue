<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer />

              </v-toolbar>
              <v-card-text>
           
                  <v-text-field
                    label="Login"
                    name="username"
                    type="text"
                    id="username"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                  />
           
              </v-card-text>
              <v-card-actions>
                <v-spacer />
              <v-btn color="primary" name="submit" v-on:click="submitProduct" type="submit" >Add</v-btn>
   
             </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import axios from 'axios'

  export default {
  mounted() {
            console.log('Component mounted.')
        },


    data(){
    return {
      
      username:'',
      password:''
      
    };
  },
 

methods:{

submitProduct: function () {
const username=document.getElementById('username').value
const password=document.getElementById('password').value
axios.post("https://devanshuwrite.herokuapp.com/addlogin",{username:username, password:password })
 .then(response => {
                         this.$router.push('/addpoem');
                         console.log(response.data);
                })
                .catch(err => console.log(err));
        },

  }

 

  }
  
</script>