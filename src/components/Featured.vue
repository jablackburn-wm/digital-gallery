<template>
<div class="featured-container">
    <p v-if="this.isLoading" class="loading">loading...</p>
    <div class="artist" v-if="!this.isLoading"><em>featured artist</em> - {{this.name}}</div>
    <div class="content" v-if="!this.isLoading">
        <img :src="image_url" :alt="this.artist.name">
        <p class="bio">{{artist.bio}}</p>
        <router-link class="link" :to="artist_url">to artist page</router-link>
    </div>
</div>
</template>


<script>
import axios from 'axios'


export default {
    data() {
        return {
            artist: {},
            name: '',
            image_url: '',
            artist_url: '',
            isLoading: false
        }
    },
    async created() {
        try {
            this.isLoading = true
            const artists = await axios.get('https://artists-ecommerce.herokuapp.com/api/v1/artists')
            const length = artists.data.artists.length
            const randIndex = Math.floor(Math.random() * length)
            this.artist = artists.data.artists[randIndex]
            this.image_url = `https://artists-ecommerce.herokuapp.com/images/${this.artist.image}`
            this.artist_url = `/artist/${this.artist.name}`
            this.name = this.artist.name.replace(/-/g, " ")
            this.isLoading = false
        } catch (err) {
            console.log(err);
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

.featured-container {
    padding: 30px 50px;
    background-color: aliceblue;
    border-top: 1px solid black;
    position: relative;
}

.artist {
    font-family: Noto Sans;
    text-align: center;
    font-size: 2rem;
    font-weight: bolder;
    width: 90%;
    position: absolute;
    top: 20px;
}

img {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    object-fit: cover;
}

.content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.bio {
    width: 60%;
    padding: 30px 20px 0 20px;
    text-align: center;
}

.link {
    padding: 5px;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 3px;
    background-color: rgb(250, 226, 229);
    font-size: 0.9rem;
    text-align: center;
}

.link:hover {
    background-color: lavender;
    color: navy;
}


@media screen and (max-width: 1000px) {
    .artist {
        font-size: 1.5rem;
    }

    img {
        width: 150px;
        height: 150px;
    }

    .bio {
        font-size: 0.8rem;
    }

    .link {
        font-size: 0.6rem;
    }

    .featured-container {
        padding: 30px 30px;
    }
}

@media screen and (max-width: 550px) {
    .featured-container {
        padding: 10px 20px;
    }

    img {
        display: none;
        position: absolute;
    }

    .artist {
        font-size: 1rem;
    }

    .bio {
        width: 70%;
        font-size: 0.7rem;
    }
}

</style>