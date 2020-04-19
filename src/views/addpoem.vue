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
                <v-toolbar-title>Adding Poem Form</v-toolbar-title>
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
                 
                    label="poem"
                    name="poem"
                    type="text"
                    id="poem"
                    
                 
                    
                  />
    <v-btn color="primary" name="submit" v-on:click="submitProduct" type="submit" >Add</v-btn>
   
                 
              
                     
   
              </v-card-text>
              <v-card-actions>
                <v-spacer />
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
// import VueRouter from 'vue-router'

  export default {
  mounted() {
            console.log('Component mounted.')
        },


    data(){
    return {
      
      poem:'',
      username:''
      
    };
  },
 

methods:{

submitProduct: function () {
const poem=document.getElementById('poem').value
const username=document.getElementById('username').value

axios.post("https://devanshuwrite.herokuapp.com/addpoem",{username:username,poem:poem})
 .then(response => {
                      this.$router.push('/');
                        console.log(response.data);

                })
                .catch(err => console.log(err));
        },

  }

 

  }
  
</script>