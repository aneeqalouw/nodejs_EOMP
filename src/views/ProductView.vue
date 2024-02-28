<template>
    <div class="container-fluid vh-100" style="background-color: black;">
        <div class="row">
            <h2 class="display-5">Product Details</h2>
        </div>
        <br><br>
        <div class="row d-block d-md-flex gap-4 justify-content-center">
            <Card v-if="product">
                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template>
                <template #cardBody>
                    <img :src="product.image" :alt="product.prodName" style="width: 200px; height: 200px;">  
                    <br><br>
                    <p>{{ product.description }}</p> 
                </template>
                <template #cardFooter>
                    <p class="card-text lead">
                        R{{ product.price }}
                    </p>
                    <i>Size made to order</i>
                </template>
            </Card>
            <div class="row" v-else>
                <SpinnerComp></SpinnerComp>
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

</style>