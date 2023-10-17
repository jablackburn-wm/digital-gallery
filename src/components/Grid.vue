<template>
    <div class="grid-container" >
        <div class="grid-header">
            <h2>Artworks</h2>
        </div>
        <div class="grid">
            <ArtworkCard class="artwork" v-for="artwork in this.artworks" :key="artwork.id" :artwork="artwork" @click="navigate(artwork)" />
        </div>
    </div>
</template>



<script>
import ArtworkCard from './ArtworkCard.vue'

export default {
    props: {
        artworks: Array,
    },
    components: {
        ArtworkCard
    },
    methods: {
        navigate(artwork) {
            this.$router.push(`/artwork/${artwork.name}`)
        }
    },
   
}

</script>

<style scoped>
.grid-container {
    padding: 0 20px 50px;
    border-top: 1px solid black;
}

.grid-header {
    text-align: center;
    font-family: Noto Sans;
    font-size: 1.5rem;
}

.grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
}

.artwork {
    cursor: pointer;
}

@media screen and (max-width: 870px) {
    .grid {
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 575px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .grid-header {
        font-size: 1.1rem;
    }
}
</style>