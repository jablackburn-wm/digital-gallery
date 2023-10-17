<template>
    <div class="artist-container">
        <Header />
        <Artist />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Artist from '../components/Artist.vue'


export default {
    components: {
        Header,
        Artist
    }
}
</script>