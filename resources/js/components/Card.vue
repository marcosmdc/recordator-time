<template>
    <div>
       <input  type="text" v-model="item.name" @click="alert()" />
       <!-- <t-button>Press me</tbutton> -->
<button type="button" class="btn btn-primary" @click="loadData()">get Email</button>

<!-- <t-alert show>Hello world</talert> -->
<div class="flex w-full p-4 text-sm bg-blue-100 border-l-4 border-blue-700 rounded">
  <div class="flex-grow text-blue-700">
    Hello world
  </div>
  <button type="button" class="p-2 ml-4 text-blue-700 rounded hover:text-blue-600">
    <svg class="w-5 h-5 fill-current">...</svg>
  </button>
</div>


<!-- <t-button variant="secondary">Press me</tbutton> -->
<button class="text-orange-500 underline duration-100 ease-in-out transform shadow" @click="getAllData()">Get all data</button>

<!-- <t-alert variant="error" show>Hello world</talert> -->
<div class="flex w-full p-4 text-sm bg-red-100 border-l-4 border-red-700 rounded">
  <div class="flex-grow text-red-700">
    Hello world
  </div>
  <button type="button" class="p-2 ml-4 text-red-700 rounded hover:text-red-600">
    <svg class="w-5 h-5 fill-current">...</svg>
  </button>
</div>
    </div>
</template>
<script>

export default{
   data: function(){
       return {
           item:{
               name:"marcos"
           }
       }
   },
   methods:{
     async loadData(){
       //alert("cargar")
      // this.item.name="nada"
        await  axios.post('/getDataFill',{
        item: this.item
       })
       .then( response =>{
           //alert(response)
           console.log(response.data[0].details)
           this.item.name=response.data[0].details
       })
     },
      getAllData(){
        axios.post('/getAllData',{
        item: this.item
       })
       .then( response =>{
           console.log(response.data)
       })
     }
      /*  alert(){
           if( this.item.name == ''){
               //alert("nada")
           } */
        /* axios.post('/getData',{
        item: this.item
       })
       .then( response =>{
           
       }) */
     
   }
}

</script>
