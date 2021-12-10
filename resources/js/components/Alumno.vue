<template>
  <div>
      <h2>Alumnos</h2>
      <table class="table" id="datatable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
          </tr>

        </tbody>
      </table>
  </div>
</template>

<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import axios from 'axios';
import $ from 'jquery';



export default {
  mounted(){
    axios
    .get("getData")
    .then((response)=>
    {
      this.products = response.data;
      $('#datatable').DataTable();
    })
  },
  data: function() {
        return {
            products:[]
        }
    },
}
</script>
