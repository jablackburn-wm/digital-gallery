<template>
<div class="card-container">
    <img :src="this.image_url" :alt="artwork.name">
    <h4 class="title">{{this.name}}</h4>
    <div class="content">
        <p class="selling-type"><em>{{artwork.auction ? 'auction' : 'fixed price'}}</em></p>
        <p class="price" v-if="artwork.price">Price: {{artwork.price}}</p>
        <p class="price" v-if="artwork.highestBid">Highest Bid: {{artwork.highestBid}}</p>
    </div>
</div>

</template>


<script>

export default {
    props: {
        artwork: Object
    },
    data() {
        return {
            image_url: `https://artists-ecommerce.herokuapp.com/images/${this.artwork.image}`,
            name: this.artwork.name.replace(/-/g, " ")
        }
    }
}
</script>


<style scoped>
.card-container {
    border: 1px solid black;
    border-radius: 3px;
    padding: 30px;
    background-color: wheat;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    width: 200px;
    height: 200px;
    border-radius: 4px;
    object-fit: cover;
}

.title {
    font-family: Noto Sans;
    font-size: 1.1rem;
    text-align: center;
}


.content {
    width: 80%;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

p {
    margin: 5px 0;
    text-align: center;
}

.selling-type {
    font-size: 1.1rem;
    color: slateblue;
}

.price {
    color: darkmagenta;
}


@media screen and (max-width: 575px) {
    .card-container {
        padding: 20px;
    }

    img {
        height: 150px;
    }

    .title {
        font-size: 0.9rem;
        margin: 10px 0;
    }

    .selling-type {
        font-size: 0.8rem;
    }

    .price {
        font-size: 0.7rem;
    }
}


</style>