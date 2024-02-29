<template>
    <div class="container-fluid vh-100" style="background-color: black;">
        <div class="row">
            <h2 class="display-5">Product Details</h2>
        </div>
        <br><br>
        <div class="row d-block d-md-flex gap-4 justify-content-center align-items-center" id="single">
            <div class="row" v-if="product">
                <div class="col me-auto m-5">
                    <img :src="product.image" :alt="product.prodName" style="width: 20rem; height: 20rem; border-radius: 3px;">
                </div>
                <div class="col">
                    <br><br>
                    <h4 style="text-transform: capitalize;">{{ product.prodName }}</h4>
                    <br><br>
                    <p style="text-transform: capitalize;">{{ product.description }}</p>
                    <br><br>
                    <p class="lead fw-bold fs-5">R{{ product.price }}</p>
                    <br><br>
                    <i>Size made to order</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

    export default {
        components:{
            Card,
            SpinnerComp
        },
        computed: {
            product() {
                return this.$store.state.product
            }
        },
        mounted() {
            this.$store.dispatch('fetchProduct', this.$route.params)
        }
    }
</script>

<style scoped>
.card {
        width: 23rem;
        height: 28rem;
        /* margin: 30px; */
        
    }
#single{
    border: 1px solid white ;
    border-radius: 3px;
    width: 50rem;
}
</style>