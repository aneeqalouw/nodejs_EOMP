<template>
  <div class="modal fade" :id="addProductModel" tabindex="-1" aria-labelledby="addProduct" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-black">
          <h1 class="modal-title fs-5" id="addProduct">Add product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body bg-black text-white">
          <div >
          <br><br>
          <div>
              <input type="text" placeholder="ID" v-model="payload.prodID" class="bg-transparent border-dark text-white">
          </div>
          <br><br>
          <div>
              <input type="text" placeholder="Name" v-model="payload.prodName" class="bg-transparent border-dar text-white">
          </div>
          <br><br>
          <div>
              <input type="text" placeholder="Category" v-model="payload.category" class="bg-transparent border-dark text-white">
          </div>
          <br><br>
          <div>
              <input type="text" placeholder="Image link" v-model="payload.image" class="bg-transparent border-dark text-white">
          </div>
          <br><br>
          <div>
              <input type="text" placeholder="Price" v-model="payload.price" class="bg-transparent border-dark text-white">
          </div>
          <br><br>
          <div>
              <input type="text" placeholder="Description" v-model="payload.description" class="bg-transparent border-dark text-white">
          </div>
          <br><br>
        </div>
        <div class="modal-footer bg-black">
          <button type="button" class="btn bg-transparent border-light text-white" data-bs-dismiss="modal">Close</button>
          <button type="submit" @click.prevent="addingProduct" class="btn btn-light">Save changes</button>
        </div>
      </div>        
      </div>
    </div>
  </div>
  </template>
  
  <script>
      export default {
         props:['addProductModel'],
          data(){
              return{
                  payload: {
                      prodID: '',
                      prodName: '',
                      category: '',
                      image: '',
                      price: null,
                  }
              }
          },
          methods: {
            addingProduct(){
                  this.$store.dispatch('addProduct', this.payload)
              }
          }
      }
  </script>
  
  <style scoped>
  
  </style>