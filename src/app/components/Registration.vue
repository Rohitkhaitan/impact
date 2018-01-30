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
            <input type="text" class="form-control col-md-6" v-model="item.password" placeholder="password">
          </div>
        </div>
      </div><br/>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Gender:</label>
            <md-radio v-model="item.radio" value="Male">Male </md-radio>
            <md-radio v-model="item.radio" value="Female" class="md-primary">Female</md-radio>
            <md-radio v-model="item.radio" value="Other" class="md-primary">Other</md-radio>
          </div>
        </div>
      </div><br/>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Country:</label>
            <md-autocomplete v-model="item.selectedCountry" :md-options="countries" required/>
            </md-autocomplete>
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
      addItem(){
        let uri = 'http://localhost:3014/items/add';
        this.axios.post(uri, this.item).then((response) => {
          console.log(response);
          toastr.success(response.data.item, 'Response');
          this.$router.replace({ name: 'Login'})
        });
      }
    }
  }
  </script>
  <script>
  export default {
    name: 'AutocompleteTrigger',
    data: () => ({
      selectedCountry: null
      countries: [
        'Algeria',
        'Argentina',
        'Brazil',
        'Canada',
        'Italy',
        'India',
        'Japan',
        'United Kingdom',
        'United States'
      ]
      })
      </script>

      <script>
  export default {
    name: 'RadioHueColors',
    data: () => ({
      radio: 'Male'
    })
  }
</script>

<style >
  .md-radio {
    display: flex;
  }
</style>
