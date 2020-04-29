<template>
<v-app>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-container >
       <div class="display-2  text-center"  style="color:#ffcc77"> નવરાશ ની સર્જનાત્મકતા. <br><br> </div>
<v-row>
        <v-col
           v-for="(item, i) in items"
          :key="i"  
          cols="12"
          md="12"
        >
          <v-card
            class="pa-2"
            color="#4c2a20"
             :elevation="10"
            outlined
            tile
          :loading="loading"
   
  >

    <!-- <v-card-title class="headline  white--text" style="background:#aa9988" v-text="item.name"></v-card-title> -->

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
        
      >

       
      </v-row>

<br>      <div class="title font-weight-regular" style="font-size:23px !important; color:#ff8866 !important;">
       <U>  વિચારો થી શબ્દો સુધી ની સફર..</U> <br>
      </div>

  <v-container>
      <div  class="subtitle-1 " style="font-size:20px !important; text-align:left !important;  color:#ffeedd !important;" v-text="item.poem"  ><br><br>
           
 </div>
 </v-container>
  <div class="text-right black--text" style="font-size:17px !important; color:#ff8866 !important;">- દેવાંશુ <br> </div>


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

 <v-footer  style="background:#5d3225" >
    <v-spacer></v-spacer>
    <div style="color:#ff8866 !important"> DevanShu Brahmbhatt   &copy; {{ new Date().getFullYear() }}</div>
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
