<template>
    <div class="home-container">
        <Featured /> 
        <p v-if="this.isLoading" class="loading">loading...</p>
        <Grid :artworks="this.artworks" v-if="!this.isLoading" />
    </div>
</template>


<script>
import Grid from './Grid.vue'
import Featured from './Featured.vue'
import axios from 'axios'

export default {
    name: 'home',
    components: {
        Grid,
        Featured,
    },
    data() {
        return {
            artworks: [],
            isLoading: false
        }
    },
     async created() {
        this.isLoading = true
        try {
            const artworks = await axios.get('https://artists-ecommerce.herokuapp.com/api/v1/artworks')
            this.artworks = artworks.data.artworks
        } catch (err) {
            console.log(err)
        }
        this.isLoading = false

    }
}

</script>

<style scoped>
.loading {
    width: 100%;
    font-size: 2rem;
    font-family: Noto Sans;
    text-align: center;
    color: navy;
}
</style>