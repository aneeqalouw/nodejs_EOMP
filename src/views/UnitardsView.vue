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
        <button class="btn btn-outline-light d-flex gap-4" type="button">
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
    <div class="row" v-if="product.category='unitards'">
      <Card v-for="product in products" :key="product.prodID">
        <template #cardHeader>
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
    <div class="row" v-else>
      <SpinnerComp></SpinnerComp>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>