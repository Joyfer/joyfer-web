<template>
  <v-app>
<Navbar></Navbar>
    <v-main class="main mt-13 pb-16">
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
.main{
    background: rgb(247, 247, 247) !important;
}
[id]{
  scroll-margin-top: 13ex;
}
 .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  
  @-webkit-keyframes fadeInDown {
    0% {

      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {

      -webkit-transform: none;
      transform: none;
    }
  }
  
  @keyframes fadeInDown {
    0% {

      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    100% {

      -webkit-transform: none;
      transform: none;
    }
  }
  
  /* Simple CSS3 Fade-in Animation */
  @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  
  .fadeIn {
    opacity:0;
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;
  
    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;
  
    -webkit-animation-duration:1s;
    -moz-animation-duration:1s;
    animation-duration:1s;
  }
  
  .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  
  .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  
  .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  
  .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
  }
</style>
