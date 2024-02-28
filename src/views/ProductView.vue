<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Product Details</h2>
        </div>
        <div class="row">
            <Card v-if="product">
                <template #cardHeader>
                    <h4 class="card-title">{{ product.prodName }}</h4>
                </template>
                <template #cardBody>
                    <img :src="product.image" :alt="product.prodName">   
                </template>
                <template #cardFooter>
                    <p class="card-text lead">
                        R{{ product.price }}
                    </p>
                </template>
            </Card>
            <div class="row" v-else>
                <SpinnerComp></SpinnerComp>
            </div>
        </div>
    </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';
    export default {
        components:{
            CardComp,
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

</style>