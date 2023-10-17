<template>
<div>
    <div class="artist-container">
        <p v-if="this.isLoading" class="loading">loading...</p>
        <img v-if="!this.isLoading" :src="this.artist_url" :alt="this.artist.name">
        <div class="content">
            <h1 class="title">{{this.name}}</h1>
            <p>{{this.artist.bio}}</p>
        </div>
    </div>
    <Grid :artworks="this.artworks" :isLoading="this.isLoading" v-if="!this.isLoading" />
</div>



</template>


<script>
import Grid from '../components/Grid.vue'
import axios from 'axios'


export default {
    components: {
        Grid
    },
    data() {
        return {
            artist: {},
            artworks: [],
            artist_url: '',
            isLoading: false
        }
    },
    async created() {
        try {
            this.isLoading = true
            const { data } = await axios.get(`https://artists-ecommerce.herokuapp.com/api/v1/artists/profile/${this.$route.params.name}`)
            this.artist = data.artist
            this.artworks = data.artworks
            this.artist_url = `https://artists-ecommerce.herokuapp.com/images/${data.artist.image}`
            this.name = this.artist.name.replace(/-/g, " ")
            this.isLoading = false
        } catch (err) {
            console.log(err)
        }
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

.artist-container {
    display: flex;
    padding:  0 20px 20px 20px;
    justify-content: space-around;
    align-items: center;
}

img {
    margin-right: 30px;
    width: 250px;
    height: 250px;
    border-radius: 100%;
    object-fit: cover;
}

.content {
    width: 60%;
}

.title {
    width: 100%;
    font-family: Noto Sans;
    font-size: 2.1;
    text-align: center;
}

p {
    font-size: 1.3rem;
    padding: 0 20px 20px 20px;
    text-align: center;
    margin: 0;
}

@media screen and (max-width: 900px) {
    img {
        margin-right: 15px;
        width: 200px;
        height: 200px;
    }

    .title {
        font-size: 1.3rem;
    }

    p {
        font-size: 0.8rem;
    }

}

@media screen and (max-width: 530px) {
    .artist-container {
        padding: 0 10px 10px 10px;
    }

    img {
        display: none;
        position: absolute;
    }

    .content {
        width: 100%;
    }

    .title {
        margin: 0 0 20px 0;
    }

}
</style>