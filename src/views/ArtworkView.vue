<template>
<div class="artwork-container">
    <Header />
    <Artwork />
</div>

</template>

<script>
import Header from '../components/Header.vue'
import Artwork from '../components/Artwork.vue'

export default {
    components: {
        Header,
        Artwork
    },
}

</script>