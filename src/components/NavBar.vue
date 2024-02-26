<template>
<div>
<nav class="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="dark" style="background-color: black;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="#" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto gap-2">
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="padding-top: 0;">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/shop">Shop All</router-link></li>
            <li><router-link to="/unitards">Unitards</router-link></li>
            <li><router-link to="/topsandleggings">Tops and Leggings</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </div>

</template>

<script>
import { RouterLink } from 'vue-router';

    export default {
    components: { RouterLink }
}
</script>

<style src="../assets/css/style.css">

</style>