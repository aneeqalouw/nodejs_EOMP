<template>
  <div id="home" class="container-fluid">
    <div class="row ">
      <div class="col container-fluid">
        <div class="vh-100 d-flex justify-content-center align-items-center">
        <h1 class="display-4">Welcome to <span id="aa">Altitude Apparel!</span> <br>
        <h3 class="display-5">All your aerial fitness clothing in one place</h3>
        <button class="btn btn-dark" style="width: 10rem;">
          <router-link to="/shop" id="buttons">Shop now!</router-link>
        </button>
      </h1> 
    </div>  
  </div>
  <div class="col d-none d-md-flex" style="padding: 0;">
    <img src="https://i.ibb.co/CWd8Sj6/FB-IMG-1708946328263.jpg" alt="Aerial" loading="lazy" style="width: 40rem; height: 40rem;">
  </div>
</div>  
</div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style src="../assets/css/style.css">


</style>
