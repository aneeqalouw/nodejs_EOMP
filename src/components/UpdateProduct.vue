<template>
    <button
    type="button"
    class="btn modalButton"
    data-bs-toggle="modal"
    data-bs-target="updateProductModel"
  >
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1244 0.000834316C18.4268 0.000834316 17.7438 0.248644 17.2174 0.730914L8.19616 8.97038L7.99672 9.15311L7.94026 9.41427L7.31371 12.3346L7.02958 13.5594L8.36737 13.2991L11.5548 12.7251L11.8389 12.6733L12.0383 12.4906L21.0314 4.22528C21.4083 3.87907 21.6649 3.43836 21.7688 2.95873C21.8728 2.47909 21.8194 1.982 21.6155 1.53011C21.4115 1.07823 21.0661 0.691772 20.6228 0.419472C20.1795 0.147172 19.6581 0.00204911 19.1244 0.000834316ZM19.1244 1.61786C19.3375 1.61786 19.5478 1.71798 19.7509 1.90405C20.1562 2.27618 20.1562 2.68002 19.7509 3.05131L10.9282 11.1356L9.36275 11.4226L9.67603 9.98832L18.4987 1.90488C18.7009 1.71965 18.9113 1.61786 19.1244 1.61786ZM0 3.31247V20H18.2137V8.99625L16.3923 10.665V18.3312H1.82137V4.98123H10.1887L12.0101 3.31247H0Z"
        fill="#F8F8F8"
      />
    </svg>
  </button>
    <div
      class="modal fade"
      :id="updateProductModel"
      tabindex="-1"
      aria-labelledby="updateProduct"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h1 class="modal-title fs-5" id="updateProduct">Edit Product</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body bg-dark">
            <div @submit.prevent="updateProduct">
              <div>
                <input
                  type="text"
                  placeholder="prodID"
                  v-model="payload.prodID"
                  class="bg-transparent border-dark"
                />
              </div>
              <br /><br />
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  v-model="payload.prodName"
                  class="bg-transparent border-dark"
                />
              </div>
              <br /><br />
              <div>
                <input
                  type="text"
                  placeholder="image"
                  v-model="payload.image"
                  class="bg-transparent border-dark"
                />
              </div>
              <br /><br />
              <div>
                <input
                  type="text"
                  placeholder="category"
                  v-model="payload.category"
                  class="bg-transparent border-dark"
                />
              </div>
              <br /><br />
              <div>
                <input
                  type="text"
                  placeholder="price"
                  v-model="payload.price"
                  class="bg-transparent border-dark"
                />
              </div>
              <br /><br />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn bg-transparent border-light text-white"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-light">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["updateProductModel"],
    data() {
      return {
        payload: {
          prodID: "",
          prodName: "",
          category: "",
          image: "",
          price: ""
        },
      };
    },
    methods: {
      updateProduct() {
        this.$store.dispatch("updateProduct", this.payload);
      },
    },
  };
  </script>
  
  <style scoped></style>
  