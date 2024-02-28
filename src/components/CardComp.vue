<template>
    <div class="card">
        <div class="card-header" >
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
        <div class="card-footer">
            <slot name="cardFooter"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name : 'CardView'
    }
</script>

<style scoped>
.card {
        width: 23rem;
        height: 28rem;
        /* margin: 30px; */
        
    }
</style>