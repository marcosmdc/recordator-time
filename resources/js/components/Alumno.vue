<template>
  <div>
   
   <table class="table table-hover table-bordered" id="example">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
      </tr>
      
    </tbody>
  </table>
       <b-button id="show-btn" @click="showModal">Open Modal</b-button>
    <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
    </b-modal>

  </div>
  
  
</template>
<script>
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';






export default {
 
  mounted(){
    //API Call
    axios
    .post("/getAllData")
    .then((res)=>
    {
      this.users = res.data;
      $('#example').DataTable();
    })
  },
  data: function() {
        return {
            users:[]
        }
    },
      methods:{
        addUser: function() {
        //console.log("clicked");
        alert("agregar modal para agregar");
          var postData = {
            "fields": {
                "firstname": $("#userFirstName_add").val(),
                "lastname": $("#userLastName_add").val(),
                "email": $("#userEmail_add").val(),
                "password": $("#userPass_add").val(), 
                "cmd": "create"
            }
          }
      },
         showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
     
   }
      
}
</script>
