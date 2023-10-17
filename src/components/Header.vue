<template>
<div>
    <div class="header-container">
        <router-link to="/">to home</router-link>
        <div class="buttons">
            <button @click="openCart()" v-if="this.$route.name != 'checkout'">Shopping Cart</button>
            <button @click="logout()">Log Out</button>
        </div>

    </div>
    <ShoppingCart @exit="closeCart()" v-if="this.cartIsVisible" />
</div>

</template>


<script>
import ShoppingCart from './ShoppingCart.vue'

export default {
    methods: {
        logout() {
            localStorage.removeItem('token')
            this.$store.commit('setToken', '')
            this.$store.commit('logout')
        },
        openCart() {
            this.cartIsVisible = true
        },
        closeCart() {
            this.cartIsVisible = false
        }
    },
    components: {
        ShoppingCart
    },
    data() {
        return {
            cartIsVisible: false
        }
    }
}

</script>


<style scoped>
.header-container {
    height: 60px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    background-color: gold;
    font-size: 1.2rem;
    position: fixed; 
    top: 0px;
    z-index: 100;
}

a {
    text-decoration: none;
    color: black;
    font-weight: bolder;
}

a:hover {
    color: royalblue;
}

button {
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    background-color: rgb(250, 226, 229);
    margin-right: 20px;
    font-family: Noto Sans;
    font-size: 1rem;
}

button:hover {
    color: navy;
    background-color: lavender;

}

@media screen and (max-width: 520px) {
    .header-container {
        font-size: 0.9rem;
    }

    button {
        font-size: 0.7rem;
    }
}

</style>