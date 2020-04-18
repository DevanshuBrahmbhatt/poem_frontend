<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <div class="headline font-weight-black">Devanshu's Write</div>

       
      </div>

      <v-spacer></v-spacer>
 

      <v-btn
        href="https://devanshubrahmbhatt.github.io/portfolio/"
        target="_blank"
        text
      >
        <span class="mr-2">About</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
</v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  

  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
#app {
font-family: 'Roboto', sans-serif;
  font-size: 25px;
  background:#F5F5F5;
}
</style>
