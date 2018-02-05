<template>
  <div>
    <h1>Register</h1>
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
            <input type="password" class="form-control" v-model="item.password" placeholder="password" required/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Gender:</label>
            <input type="radio" v-model="item.gender" name= "gender" value="Male" checked/>Male<br/>
            <input type="radio" v-model="item.gender" name= "gender" value="Female" >Female<br/>
            <input type="radio" v-model="item.gender" name= "gender" value="Other" >Other<br/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Country:</label>
            <select name=country class="form-control col-md-6" v-model="item.country" >
              <option value="australia" >Australia</option>
              <option value="brazil">Bazil</option>
              <option value="india">India</option>
              <option value="japan">Japan</option>
              <option value="united states" >United States</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Image:</label>
              <input type="file" v-on:change="fileChange($event.target.files)" name="image" accept="image/*" required/>
          </div>
        </div>
      </div><br/>
      <div class="form-group">
        <button class="btn btn-primary">Submit</button>
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
      fileChange(fileList) {
                  this.files.append("file", fileList[0]);

                  this.item.image = this.files;
            },
      addItem(){
        let uri = 'http://localhost:4005/items/register';
        this.axios.post(uri, this.item).then((response) => {
          console.log(response);
          toastr.success(response.data.item, 'Response');
          this.$router.replace({ name: 'Login'})
        });
      }
    }
  }
  </script>
