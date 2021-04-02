<template>
  <v-app>
<Navbar></Navbar>
    <v-main class="mt-14 main pb-16 pt-2">
      <router-view></router-view>
    </v-main>
    <v-footer padless><Footer></Footer></v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
export default {
  name: 'App',

  components: {
        Navbar, Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
body{
    font-family: 'Source Sans Pro', sans-serif !important;
}
.main{
    background: rgb(247, 247, 247) !important;
}
h1, h2, h3, h4, h5{
  font-family: 'Source Sans Pro', sans-serif;
}
h1{
   font-size: 48px;
}
h2{
  font-size: 42px;
}
p{
    font-family: 'Source Sans Pro', sans-serif;
    
}
span{
font-family: 'Source Sans Pro', sans-serif;
font-weight: bold;
}
small{
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 14px;
}
[id]{
  scroll-margin-top: 13ex;
}
</style>
