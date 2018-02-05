<template>
  <div>
    <h1>Profile </h1>

    <form v-on:submit.prevent="UpdateItem" v-if="show">
    <h3>Pls add your details</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Address:</label>
            <textarea rows="4" cols="40" name="address" v-model="item.address"
            class ="from-control"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>DOB</label>
            <input type="date" class="form-control" v-model="item.dob">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Mobile no:</label>
            <input type="tel" class="form-control" v-model="item.mobile">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Addhar</label>
            <input type="number" class="form-control" size = "16" v-model="item.addhar">
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" @click="show=!show">Submit</button>
      </div>
    </form>


  <table class="table table-hover table-bordered" v-else>
      <thead>
        <tr>
          <td>Username</td>
          <td>Gender</td>
          <td>Nationality</td>
          <td>Birth</td>
          <td>Mobile</td>
          <td>Addhar</td>
          <td>Address</td>
          <td>Profil Pic</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in item">
          <td>{{ item.username }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.DOB }}</td>
          <td>{{ item.mobile }}</td>
          <td>{{ item.addhar}}</td>
          <td>{{ item.address}}</td>
          <td>{{ item.image}}</td>
          <td>
            <button class="btn btn-primary" @click="show= show" >
              Edit
          </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
  import toastr from 'toastr';

  export default {
    data(){
    show: true;
      return{
        item:{}
      }
    },
    methods: {
      updateItem()
      {
      let uri = 'http://localhost:4000/items/update/' + this.$route.params.id;
      this.axios.post(uri, this.item).then((response) => {
      this.$router.push({name: 'Profil'});
    });
    }
  }
  }
  </script>
