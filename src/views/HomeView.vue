<template>
  <div class="home-container">
    <Header  />
    <Home />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Login,
    Header,
    Home
  },
  data() {
    return {
    }
  }
}
</script>


