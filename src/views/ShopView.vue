<template>
  <div class="container-fluid my-3" style="background-color: black">
    <h2 class="fs-1">Shop All</h2>
    <div class="row">
      <div class="input-group">
        <input
          type="text"
          class="form-control bg-transparent text-white"
          placeholder="Search..."
          aria-label="Recipient's username with two button
        addons"
          @keyup="search"
          id="searchInput"
        />
        <button
          class="btn btn-outline-light d-flex gap-4"
          type="button"
          @click="sorting"
        >
          Sort by price
          <!-- icon -->
          <div>
            <svg
              id="sortIcon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 8.33333H1.66667M8.33334 11.6667H1.66667M5.00001 15H1.66667M15 5H1.66667M15.8333 8.33333V16.6667M15.8333 16.6667L18.3333 14.1667M15.8333 16.6667L13.3333 14.1667"
                stroke="#F8F8F8"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
    <br /><br />
    <div
      class="row d-block d-md-flex gap-4 justify-content-center"
      v-if="products"
      id="productContainer"
    >
      <Card v-for="product in products" :key="product.prodID" class="my-2">
        <template #cardHeader>
          <h4 class="card-title">{{ product.prodName }}</h4>
        </template>
        <template #cardBody>
          <img
            :src="product.image"
            :alt="product.prodName"
            style="width: 200px; height: 200px"
          />
        </template>
        <template #cardFooter>
          <p class="card-text lead">R{{ product.price }}</p>
          <button type="button" class="btn btn-dark">
            <router-link :to="{ name: 'product', params: { id: product.prodID } }" style="text-decoration: none; color: white;"
            >View Details</router-link
          >
          </button>
          
          <br /><br />
        </template>
      </Card>
    </div>
    <div class="row" v-else>
      <SpinnerComp></SpinnerComp>
    </div>
  </div>
  <br /><br />
</template>

<script>
import Card from "@/components/CardComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
import ProductView from "./ProductView.vue";
export default {
  name: "ProductsView",
  components: {
    Card,
    SpinnerComp,
    ProductView,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    sorting() {
      let sorted = this.products.sort((e1, e2) => {
        if (e1.price < e2.price) {
          return -1;
        } else if (e1.price > e2.price) {
          return 1;
        } else return 0;
      });
    },
    search() {
      let searchInput = document.getElementById("searchInput");
      let productContainer = document.getElementById("productsContainer");
      let searchItem = this.products.filter((prod) => {
        return prod.prodName
          .toLowerCase()
          .includes(searchInput.value.toLowerCase());
      });
      if (searchItem) {
        productContainer.innerHTML = "";
        searchItem.forEach((item) => {
          productContainer.innerHTML += item
          
        });
      }
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style src="../assets/css/style.css"></style>
