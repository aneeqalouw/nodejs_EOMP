<template>
  <div class="container-fluid vh-100 my-3" style="background-color: black">
    <div class="row">
      <div class="input-group">
        <input
          type="text"
          class="form-control bg-transparent"
          placeholder="Search..."
          aria-label="Recipient's username with two button addons"
        />
        <button class="btn btn-outline-light d-flex gap-4" type="button" @click="sorting">
          Sort by price
          <!-- icon -->
          <div>
            <svg
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
    <div class="row" v-if="tops&leggings?.length" >
      <Card v-for="product in tops&leggings" :key="product.prodID" >
        <template #cardHeader >
          <h4 class="card-title">{{ product.prodName }}</h4>
        </template>
        <template #cardBody>
          <img :src="product.image" :alt="product.prodName" />
        </template>
        <template #cardFooter>
          <p class="card-text lead">R{{ product.price }}</p>
          <router-link :to="{ name: 'product', params: { id: product.prodID } }"
            >View Details</router-link
          >
          <br /><br />
          <i>Size made to order</i>
        </template>
      </Card>
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
    products() {
      return this.$store.state.products;
    },
    unitards() {
      return this.products?.filter(product=>product.category == 'tops&leggings')
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

<style scoped>

</style>