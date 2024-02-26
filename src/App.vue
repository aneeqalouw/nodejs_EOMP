<template>
  <NavBar/>
  <main class="container-fluid vh-100" style="background-color: black;">
    <router-view/>
  </main>
  <FooterComp></FooterComp>
</template>


<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';


export default{
  components: {
    NavBar,
    FooterComp

  }
 }
</script>


<style src="./assets/css/style.css">



</style>
