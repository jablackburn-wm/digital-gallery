<template>
<div class="artwork-container">
<p v-if="this.isLoading" class="loading">loading...</p>
<img v-if="!this.isLoading" :src="image_url" :alt="this.artwork.name">
<div class="content">
    <h1 class="title">{{this.name}}</h1>
    <h4 class="subtitle" v-if="!this.isLoading">By {{this.artist_name}}</h4>
    <p class="artwork">{{this.artwork.description}}</p>
    <div class="buttons" v-if="!this.isLoading">
        <div class="price-container">
            <p class="price"><em>{{artwork.auction ? 'auction' : 'fixed price'}}</em></p>
            <p class="price" v-if="artwork.price">Price: {{artwork.price}}</p>
            <p class="price" v-if="artwork.highestBid">Highest Bid: {{artwork.highestBid}}</p>
        </div>
        <div class="links">
            <router-link class="link" :to="artist_url">to artist page</router-link>
            <button v-if="!this.artwork.auction" class="link" @click="purchase()">add to cart</button>
            <button v-if="this.artwork.auction" class="link" @click="bid()">make a bid</button>
        </div>
    </div>
</div>
</div>

</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            artwork: {},
            image_url: '',
            artist_url: '',
            isLoading: false,
            artist_name: '',
            name: ''
        }
    },
    methods: {
        purchase() {
            this.$store.commit('addToCart', this.artwork)
            alert(`${this.name} added to cart!`)
        },

        bid() {
            let bid = prompt('Enter your bid:', `${this.artwork.highestBid}`)
            if (isNaN(bid)) {
                alert('bid must be a number (no extra characters)')
                return
            }
            bid = parseInt(bid)
            if (bid <= this.artwork.highestBid) {
                alert('bid must be higher than current highest bid')
                return
            }
            this.updateBid(bid)
            alert('bid successful!')
        },

        async updateBid(bid) {
            const newArtwork = this.artwork
            newArtwork.highestBid = bid
            try {
                const res = await axios.patch(`https://artists-ecommerce.herokuapp.com/api/v1/artworks/${this.$route.params.name}`, newArtwork)
                this.artwork = res.data.artwork
            } catch (err) {
                console.log(err)
            }
        }
    },

    async created() {
        try {
            this.isLoading = true
            const { data } = await axios.get(`https://artists-ecommerce.herokuapp.com/api/v1/artworks/${this.$route.params.name}`)
            this.artwork = data.artwork
            this.image_url = `https://artists-ecommerce.herokuapp.com/images/${this.artwork.image}`
            this.artist_url =  `/artist/${this.artwork.artist}`
            this.name = this.artwork.name.replace(/-/g, " ")
            this.artist_name = this.artwork.artist.replace(/-/g, " ")
            this.isLoading = false
        } catch {
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

.artwork-container {
    display: flex;
    align-items: center;
    padding-bottom: 50px;
}

img {
    margin: 0 50px;
    height: 500px;
    max-width: 600px;
    object-fit: cover;
    border-radius: 5px;
}

.title {
    width: 100%;
    font-family: Noto Sans;
    font-size: 2.1;
    text-align: center;
}

.subtitle {
    text-align: center;
    font-size: 0.8rem;
}

.artwork {
    font-size: 1.3rem;
    padding: 0 30px;
    text-align: center;
}

.price-container {
    display: flex;
}


.price {
    color: royalblue;
    margin: 0 10px 20px 20px;
}



.buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.link {
    cursor: pointer;
    font-family: Raleway;
    font-size: 1.1rem;
    padding: 5px;
    margin: 0 10px;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 3px;
    background-color: rgb(250, 226, 229);
}

.link:hover {
    background-color: lavender;
    color: navy;
}

@media screen and (max-width: 1150px) {
    img {
        margin: 0 25px;
        height: 400px;
        max-width: 500px;
    }
}
@media screen and (max-width: 950px) {
    img {
        margin: 0 20px;
        height: 370px;
        max-width: 490px;
    }

    .title {
        font-size: 1.7rem;
    }

    .subtitle {
        font-size: 0.7rem;
    }

    .artwork {
        font-size: 1rem;
    }

    .price-container {
        font-size: 0.8rem;
    }

    .link {
        font-size: 0.9rem;
    }
}

@media screen and (max-width: 860px) {
    .artwork-container {
        flex-direction: column;
    }

    img {
        max-width: 90%;
        height: 300px;
    }
}
</style>