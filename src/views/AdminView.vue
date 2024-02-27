<template>
  <div class="container-fluid vh-100">
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
        <AddUser :user="user" addUserModel="addUserModelTarget" />
      </div>
    </div>
    <div class="row">
      <table class="table-bordered bg-transparent border-light text-white">
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
              {{ user.userAge }}
            </td>
            <td>
              {{ user.sex }}
            </td>
            <td>
              {{ user.emailAdd }}
            </td>
            <td>
              {{ user.userRole }}
            </td>
            <td class="d-flex justify-content-between">
              <button class="btn">Edit</button>
              <button class="btn">Delete</button>
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
      <table class="table-bordered bg-transparent border-light text-white">
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
              <button class="btn">
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
              <button class="btn">
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
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
import AddProduct from "@/components/AddProduct.vue";
export default {
  components: {
    AddUser,
    AddProduct
  },
  data() {
    return {
      payload: {
        firstName: null,
        lastName: null,
        age: null,
        sex: null,
        emailAdd: null,
        userRole: null,
      },
    };
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
    addUser() {
      //
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style scoped></style>
