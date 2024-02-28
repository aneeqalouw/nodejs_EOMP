<template>
  <NavBar/>
  <main class="container-fluid" style="background-color: black;">
    <router-view/>
    <div style="display: none;">
      <SpinnerComp></SpinnerComp> 
    </div>
  </main>
  <FooterComp class="container-fluid"></FooterComp>
</template>


<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';

export default{
  components: {
    NavBar,
    FooterComp,
    SpinnerComp

  }
 }
</script>


<style src="./assets/css/style.css">



</style>
