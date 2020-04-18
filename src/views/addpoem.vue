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
                   class="form-control"
                    label="poem"
                    name="poem"
                    type="text"
                    id="poem"
                    
                 
                    
                  />
    <v-btn color="primary" name="submit" v-on:click="submitDetails" type="submit" >Add</v-btn>
   
                 
              
                     
   
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

  export default {
  mounted() {
            console.log('Component mounted.')
        },


    data(){
    return {
      
      poem:'',
      
    };
  },
 

methods:{

submitDetails: function () {
const poem=document.getElementById('poem').value
axios.post('https://devanshuwrite.herokuapp.com/addpoem',{poem:poem})
//  .then(response => {
//                         console.log(response.data);
//                 })
//                 .catch(err => console.log(err));
        },

  }

 

  }
  
</script>