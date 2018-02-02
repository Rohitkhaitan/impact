<template>
  <div>
    <h1>Login</h1>
    <form v-on:submit.prevent="addItem">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Username:</label>
            <input type="text" class="form-control" v-model="item.username" placeholder="username" required/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Password:</label>
            <input type="text" class="form-control col-md-6" v-model="item.password" placeholder="password" required/>
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
        let uri = 'http://localhost:4000/item/add';
        this.axios.post(uri, this.item).then((response) => {
          console.log(response);
          toastr.success(response.data.item, 'Response');
          this.$router.replace({ name: 'Profile'})

        });
      }
    }
  }
  </script>
