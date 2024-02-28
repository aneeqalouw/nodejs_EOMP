<template>
  <div class="container">
    <div class="row">
      <h2 class="display-4">Users</h2>
    </div>
    <div class="row">
      <div class="col">
        <button
          class="btn btn-dark bg-transparent w-25 my-2"
          data-bs-toggle="modal"
          data-bs-target="#addUserModelTarget"
        >
          Add
        </button>
        <AddUser addUserModel="addUserModelTarget" />
      </div>
    </div>
    <div class="row">
      <table class="table-bordered bg-transparent border-light text-white table-responsive">
        <thead>
          <tr>
            <th>User ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Sex</th>
            <th>Email address</th>
            <th>User role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>
              {{ user.userID }}
            </td>
            <td>
              {{ user.firstName }}
            </td>
            <td>
              {{ user.lastName }}
            </td>
            <td>
              {{ user.age }}
            </td>
            <td>
              {{ user.email }}
            </td>
            <td>
              {{ user.userRole }}
            </td>
            <td class="d-flex justify-content-between">
              <UpdateUser :user="user"/>
              <button class="btn" @click="deleteUser(user.userID)">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1667 3.33341H18.3333V5.00008H16.6667V17.5001C16.6667 17.7211 16.5789 17.9331 16.4226 18.0893C16.2663 18.2456 16.0543 18.3334 15.8333 18.3334H4.16666C3.94565 18.3334 3.73369 18.2456 3.57741 18.0893C3.42113 17.9331 3.33333 17.7211 3.33333 17.5001V5.00008H1.66666V3.33341H5.83333V1.66675H14.1667V3.33341ZM7.5 7.50008V14.1667H9.16666V7.50008H7.5ZM10.8333 7.50008V14.1667H12.5V7.50008H10.8333Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br /><br />
    <br /><br />
    <div class="row">
      <h2 class="display-4">Products</h2>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-dark bg-transparent w-25 my-2" data-bs-toggle="modal"
          data-bs-target="#addProductModelTarget">Add</button>
        <AddProduct :product="product" addProductModel="addProductModelTarget" />
      </div>
    </div>
    <div class="row">
      <table class="table-bordered bg-transparent border-light text-white table-responsive">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.prodID">
            <td>
              {{ product.prodID }}
            </td>
            <td>
              {{ product.prodName }}
            </td>
            <td>
              {{ product.category }}
            </td>
            <td>
              {{ product.image }}
            </td>
            <td>R {{ product.price }}</td>
            <td class="d-flex justify-content-between">
              <UpdateProduct :product="product"/>
              <button class="btn" @click="deleteProduct(product.prodID)">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1667 3.33341H18.3333V5.00008H16.6667V17.5001C16.6667 17.7211 16.5789 17.9331 16.4226 18.0893C16.2663 18.2456 16.0543 18.3334 15.8333 18.3334H4.16666C3.94565 18.3334 3.73369 18.2456 3.57741 18.0893C3.42113 17.9331 3.33333 17.7211 3.33333 17.5001V5.00008H1.66666V3.33341H5.83333V1.66675H14.1667V3.33341ZM7.5 7.50008V14.1667H9.16666V7.50008H7.5ZM10.8333 7.50008V14.1667H12.5V7.50008H10.8333Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br><br>
    <br><br>
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
import AddProduct from "@/components/AddProduct.vue";
import UpdateUser from "@/components/UpdateUser.vue";
import UpdateProduct from "@/components/UpdateProduct.vue";

export default {
  components: {
    AddUser,
    AddProduct,
    UpdateUser,
    UpdateProduct
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    //user methods
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', {id: userID});
    },
    updateUser(user){
      let updatingUser = {
        userID : user.userID,
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        userSex: user.userSex,
        emailAdd: user.emailAdd,
        userPwd: user.userPwd,
        userRole: user.userRole
      }
      this.$store.dispatch('updateUser', {id: user.userID, data: updatingUser})
    },
    //product methods
    deleteProduct(prodID){
      this.$store.dispatch('deleteProduct', {id: prodID})
    },
    UpdateProduct(product){
      let updatingProduct = {
        prodID : product.prodID,
        prodName: product.prodName,
        category: product.category,
        image: product.image,
        price: product.price
      }
      this.$store.dispatch('updateProduct', {id: product.prodID, data: updatingProduct})
    }

  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped></style>
