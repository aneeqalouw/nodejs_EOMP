<template>
  <div class="container-fluid my-3" style="background-color: black">
    <h2 class="fs-1">Shop</h2>
    <br /><br />
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
        <div class="dropdown d-flex">
          <button
            class="btn btn-light bg-transparent text-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 10.8333H12.5V9.16667H2.5M2.5 5V6.66667H17.5V5M2.5 15H7.5V13.3333H2.5V15Z"
                fill="#F8F8F8"
              />
            </svg>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" @click="sortingLow"
                >Price(Lowest to Highest)</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="sortingHigh"
                >Price(Highest to lowest)</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="sortingUnitards"
                >Category(Unitards)</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="sortingTnL"
                >Category(Tops & Leggings)</a
              >
            </li>
          </ul>
        </div>
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
            <router-link
              :to="{ name: 'product', params: { id: product.prodID } }"
              style="text-decoration: none; color: white"
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
    sortingUnitards() {
      if (this.products.category == "unitards") {
        return this.products;
      }
    },
    sortingTnL() {
      if (this.products.category == "tops&leggings") {
        console.log(products);
      }
    },
    sortingLow() {
      let sorted = this.products.sort((e1, e2) => {
        if (e1.price < e2.price) {
          return -1;
        } else if (e1.price > e2.price) {
          return 1;
        } else return 0;
      });
    },
    sortingHigh() {
      let sorted = this.products.sort((e1, e2) => {
        if (e1.price > e2.price) {
          return -1;
        } else if (e1.price < e2.price) {
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
          productContainer.innerHTML += item;
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
<!--  -->
