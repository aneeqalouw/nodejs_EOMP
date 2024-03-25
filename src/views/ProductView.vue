<template>
    <div class="row">
        <h2 class="display-6">Product Details</h2>
    </div>
    <br><br>
  <div class="container-fluid vh-100 d-flex justify-content-center" style="background-color: black">
    <div
      class="row d-flex justify-content-center"
      id="single"
      v-if="product"
    >
      <img
        :src="product.image"
        :alt="product.prodName"
        style="width: 18rem; height: 18rem; border-radius: 3px"
        class="img-fluid d-flex justify-content-center"
      />
      <br /><br />
      <h4 style="text-transform: capitalize">{{ product.prodName }}</h4>
      <p style="text-transform: capitalize">{{ product.description }}</p>
      <p class="lead fw-bold fs-5">R{{ product.price }}</p>
      <i>Size made to order</i>
    </div>
  </div>
</template>

<script>
import Card from "@/components/CardComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  components: {
    Card,
    SpinnerComp,
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.$route.params);
  },
};
</script>

<style scoped>
.card {
  width: 23rem;
  height: 28rem;
}
#single {
  border: 1px solid white;
  border-radius: 3px;
  width: 20rem;
  height: 32rem;
}
</style>
