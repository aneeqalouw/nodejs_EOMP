<template>
    <div class="modal fade" :id="addUserModel" tabindex="-1" aria-labelledby="addUser" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h1 class="modal-title fs-5" id="addUser">Add user</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body bg-dark">
            <div @submit.prevent="register">
                <div>
                <input type="text" placeholder="userID" v-model="payload.userID" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Name" v-model="payload.firstName" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Surname" v-model="payload.lastName" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Age" v-model="payload.userAge" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Sex" v-model="payload.sex" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Role" v-model="payload.userRole" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Email" v-model="payload.emailAdd" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Password" v-model="payload.userPwd" class="bg-transparent border-dark">
            </div>
            <br><br>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn bg-transparent border-light text-white" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-light">Save changes</button>
          </div>
        </div>        
        </div>
      </div>
    </div>
    </template>
    
    <script>
import { register } from 'register-service-worker';

        export default {
           props:['addUserModel'],
            data(){
                return{
                    payload: {
                        userID: '',
                        firstName: '',
                        lastName: '',
                        userRole: '',
                        sex: '',
                        userAge: '',
                        emailAdd: '',
                        userPwd: '',
                    }
                }
            },
            methods: {
                register(){
                    this.$store.dispatch('register', this.payload)
                }
            }
        }
    </script>
    
    <style scoped>
    
    </style>