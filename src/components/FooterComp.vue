<template>
    <div class="container-fluid">
        <div class="row fixed-bottom" id="footer">
            <p>Altitude Apparel &copy; <span>{{ year }}</span></p>
            
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                year: new Date().getFullYear(),
            }
        }  
    }
</script>

<style src="../assets/css/style.css">

</style>