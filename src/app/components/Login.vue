<template>
  <div>
    <h1>Login</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Username:</label>
            <input type="text" class="form-control" v-model="username" placeholder="username" required/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control col-md-6" v-model="password" placeholder="password" required/>
          </div>
        </div>
      </div><br />
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
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
      addItem(){
        let uri = 'http://localhost:4005/items/login';
        this.axios.post(uri, this.item).then((response) => {
          console.log(response);
          toastr.success(response.data.item, 'Response');
          this.$router.replace({ name: 'Display'})

        });
      }
    }
  }
  </script>
