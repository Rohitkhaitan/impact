<template>
  <div>
    <h1>Profile </h1>

    <form v-on:submit.prevent="UpdateItem" style="Enable">
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
            <input type="date" class="form-control" v-model="item.DOB">
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
        <button class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>

  <table class="table table-hover table-bordered" style="disable">
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
        <tr v-for="item in id">
          <td>{{ item.username }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.country }}</td>
          <td>{{ item.DOB }}</td>
          <td>{{ item.mobile }}</td>
          <td>{{ item.addhar}}</td>
          <td>{{ item.address}}</td>
          <td>{{ item.image}}</td>
          <td>
            <router-link :to="{ name: 'EditItem', params: {id: item._id} }" class="btn btn-primary">
              Edit
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
  import toastr from 'toastr';

  export default {
    data(){
      return{
        item:{}
      }
    },
    methods: {
      updateItem()
      {
      let uri = 'http://localhost:3013/items/update/' + this.$route.params.id;
      this.axios.post(uri, this.item).then((response) => {
      this.$router.push({name: 'DisplayItem'});
    });
    }
  }
  </script>
