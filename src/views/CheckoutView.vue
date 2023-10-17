<template>
    <div class="checkout-container">
        <Header />
        <Checkout />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Checkout from '../components/Checkout.vue'

export default {
    components: {
        Header,
        Checkout
    }
}

</script>