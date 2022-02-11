<template>
  <div class="home">
   <form>
     <div class="form-control">
        <label for="name">Name</label>
        <input v-model="name" type="text">
      </div>
      <div class="form-control">
        <label for="name">Email</label>
        <input v-model="email" type="text">
      </div>
      <div class="form-control">
        <label for="name">Address</label>
        <input v-model="address" type="text">
      </div>
      <div class="form-control">
        <label for="gender">Gender</label><br>
       <span>Male: <input v-model="gender" type="radio" name="gender" value="male"></span>
        <span>Female: <input v-model="gender" type="radio" name="gender" value="female"></span>
      </div>
      <input
      @click.prevent="sendUser"
       type="submit" class="send" value="Send">
   </form>
   <button @click="showAll">show</button>
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return {
      name: '',
      email: '',
      address: '',
      gender: null
    }
  },
  methods: {
    sendUser(){
     axios.post('http://localhost:3000/api/records',{
       name: this.name,
      email: this.email,
      address: this.address,
      gender: this.gender
     })
     .then(function (response) {
    console.log(response);
  })
    },
    showAll(){
      axios.get('http://localhost:3000/api/records')
      .then(r => console.log(r))
    }
  }
}
</script>

<style scoped>
.form-control {
     padding: 5px;
   }
</style>
