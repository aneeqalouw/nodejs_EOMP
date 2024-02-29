import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
import AuthenticateUser from '@/service/AuthenticateUser'
const dbURL = 'https://nodejs-eomp-1.onrender.com/'


export default createStore({
  state: {
    users:null,
    user:null,
    product:null,
    products:null
  },
  getters: {
  },
  mutations: {
    setUsers(state,value) {
      state.users= value
    },
    setUser(state,value) {
      state.user= value
    },
    setProduct(state,value) {
      state.product= value
    },
    setProducts(state,value) {
      state.products= value
    }

  },
  actions: {
    //users
    async register(context, payload) {
      try{
        let {msg} = (await axios.post(`${dbURL}users/register`, payload)).data
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Registration',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
          //  
          router.push({name: 'login'})
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUsers(context) {
      try{
        let {results} = (await axios.get(`${dbURL}users`)).data
        if(results) {
          context.commit('setUsers', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to retrieve users',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUser(context, payload) {
      try{
        let {result} = (await axios.get(`${dbURL}users/${payload.id}`)).data
        if(result) {
          context.commit('setUser', result)
        }else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'User was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async updateUser(context, payload) {
      try{
        let {msg} = await axios.patch(`${dbURL}users/update/${payload.id}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Update user',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async deleteUser(context, payload) {
      console.log(payload);
      try{
        let {msg} = await axios.delete(`${dbURL}users/delete/${payload.id}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Delete user',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to delete',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async login(context, payload) {
      try{
       const {msg, token, result} = (await axios.post(`${dbURL}users/login`, payload)).data 
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('LegitUser', {
          msg, token, result
        })
        AuthenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Welcome back, 
          ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 2000
        })
          router.push({name: 'home'})
        }else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          })
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to login.',
          icon: "error",
          timer: 2000
        })
      }
      

    },


    //products
    async fetchProducts(context) {
      try{
        let {results} = 
        (await axios.get(`${dbURL}shop`)).data
        if(results) {
          context.commit('setProducts', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to retrieve products',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchProduct(context, payload) {
      try{
        let {result} = (await axios.get(`${dbURL}shop/${payload.id}`)).data
        if(result) {
          context.commit('setProduct', result)
        }else {
          sweet({
            title: 'Retrieving a single product',
            text: 'Product was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Product was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async addProduct(){
      try{
        let{result} = (await axios.post(`${dbURL}shop/addProduct`)).data
        if(result){
          context.commit('fetchProducts', result)
        }else{
          sweet({
            title: 'Add product',
            text: msg,
            icon: "success",
            timer: 2000

          })
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to add product',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async updateProduct(context, payload) {
      try{
        let {msg} = await axios.patch(`${dbURL}shop/updateProduct/${payload.id}`)
        if(msg) {
          context.dispatch('fetchProducts')
          sweet({
            title: 'Update product',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to update product',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async deleteProduct(context, payload) {
      try{
        let {msg} = await axios.delete(`${dbURL}shop/delete/${payload.id}`)
        if(msg) {
          context.dispatch('fetchProducts')
          sweet({
            title: 'Delete product',
            text: msg,
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to delete product',
          icon: "error",
          timer: 2000
        }) 
      }
    },
  },
  modules: {
  }
})
