<template>
  <div class="container-fluid my-3" style="background-color: black">
    <h2 class="fs-1">Shop</h2>
    <br /><br />
    <div class="row">
      <div class="input-group">
        <button
          class="btn btn-black bg-transparent text-white border-light"
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16669 14.1666C11.9281 14.1666 14.1667 11.928 14.1667 9.16663C14.1667 6.4052 11.9281 4.16663 9.16669 4.16663C6.40526 4.16663 4.16669 6.4052 4.16669 9.16663C4.16669 11.928 6.40526 14.1666 9.16669 14.1666Z"
              stroke="#F8F8F8"
              stroke-width="0.833333"
            />
            <path
              d="M16.6667 16.6666L14.1667 14.1666"
              stroke="#F8F8F8"
              stroke-width="0.833333"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <input
          type="text"
          class="form-control bg-transparent text-white"
          placeholder="Search..."
          aria-label="Search"
          id="searchInput"
          style="border-radius: 3px"
        />
        <div class="dropdown d-flex">
          <button
            class="btn btn-light bg-transparent text-white dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort by price
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mx-2"
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
                >Lowest to Highest</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="sortingHigh"
                >Highest to lowest</a
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
            style="width: 200px; height: 200px; mix"
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
    // search() {
    //   let searchInput = document.getElementById('searchInput')
    //   let searchItem = this.products.filter((prod) => {
    //     return prod.prodName
    //       .toLowerCase()
    //       .includes(this.searchInput.value.toLowerCase());
    //   });
    // },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style src="../assets/css/style.css"></style>

