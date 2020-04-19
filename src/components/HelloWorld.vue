<template>
<v-app>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-container >
       <div class="display-2  text-center black--text "> નવરાશ ની સર્જનાત્મકતા. <br><br> </div>
<v-row>
        <v-col
           v-for="(item, i) in items"
          :key="i"  
          cols="12"
          md="12"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          :loading="loading"
   
  >

    <v-card-title class="headline  primary white--text" v-text="item.name"></v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >

       
      </v-row>

<br>      <div class="title font-weight-regular" style="font-size:23px !important">
       <U>  વિચારો થી શબ્દો સુધી ની સફર..</U> <br>
      </div>

  <v-container>
      <div  class="subtitle-1 font-weight-black " style="font-size:20px !important, text-align:left !important;" v-text="item.poem"  ><br><br>
           
 </div>
 </v-container>
  <div class="text-right black--text" style="font-size:17px !important">- દેવાંશુ <br> </div>


    </v-card-text>

    <v-divider class="mx-4"></v-divider>
      <v-divider class="mx-4"></v-divider>
  <v-divider class="mx-4"></v-divider>
  <v-divider class="mx-4"></v-divider>
  <v-divider class="mx-4"></v-divider>
 
          </v-card>
        </v-col>




  </v-row>

</v-container><br><br>



    
      </v-col>

    </v-row>
  </v-container>

 <v-footer primary>
    <v-spacer></v-spacer>
    <div> DevanshuBrahmbhatt   &copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</v-app>
</template>


<script>
import axios from 'axios'
  export default {
   name: 'HelloWorld',

    data: () => ({
      //  loading: false,
      // selection: 1,
      items:null
       
      
         
      
    }),
  
  mounted(){
   
    axios.
     
    get('https://devanshuwrite.herokuapp.com/')
    .then((response)=>{
       console.log(response.data)
     this.items = response.data
    })
    
    .catch((err)=>{
      console.log(err);
    })
  },


    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }

  
</script>
