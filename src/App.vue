<template>
    <Login v-if="!this.$store.state.isLoggedIn" /> 
    <router-view v-if="this.$store.state.isLoggedIn" /> 
</template>


<script>
import axios from 'axios'
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Login
  },
  async created() {
    const token = localStorage.token
    if (token) {
      try {
        const { data } = await axios.get('https://artists-ecommerce.herokuapp.com/api/v1/auth', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        this.$store.commit('setUser', data.user)
        this.$store.commit('setToken', token)
        this.$store.commit('login')
      } catch (err) {
        localStorage.removeItem('token')
      }
      
      
    }
  }
}


</script>





<style>
body, html {
  margin: 60px 0 0 0;
  background-color: white;
  font-family: Raleway;
}


</style>
