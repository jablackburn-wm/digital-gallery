<template>
    <div class="cart-container" :class="this.isExiting ? 'exiting' : 'entering' ">
        <img src="../assets/remove-button.png" alt="exit" class="exit" @click="exit()">
        <div class="header">
            <h3 class="title">Shopping Cart</h3>
            <p>user: {{this.$store.state.user}}</p>
        </div>
        <div class="empty" v-if="this.$store.state.shoppingCart.length === 0">cart empty</div>
        <div class="cart-item" v-for="item in this.$store.state.shoppingCart" :key="item._id">
            <div class="item-content">
                <h4 class="item-name">{{item.name.replace(/-/g, " ")}}</h4>
                <img src="../assets/remove-button.png" alt="remove from cart" class="delete" @click="remove(item._id)">
            </div>
            <p class="price">$ {{item.price}}</p>
        </div>
        <button v-if="!(this.$store.state.shoppingCart.length === 0)" @click="this.$router.push('/checkout')">Proceed to Checkout</button>
    </div>
</template>

<script>


export default {
    data() {
        return {
            isExiting: false
        }
    },

    methods: {
        remove(id) {
            this.$store.commit('removeFromCart', id)
        },

        exit() {
            this.isExiting = true
            setTimeout(() => {
                this.$emit('exit')
            }, 1000)
        },
    }
}

</script>


<style scoped>
.cart-container {
    position: fixed;
    top: 70px;
    right: 10px;
    z-index: 1;
    width: 350px;
    background-color: aliceblue;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
}

.entering {
    animation: drop-down 1s ease-in-out;
}

.exiting {
    animation: dissapear 1s ease-in-out;
}

.exit {
    position: absolute;
    top: 5px;
    right: 5px;
}

.empty {
    text-align: center;
    font-size: 0.9rem;
    color: navy;
    padding: 20px;
}

.title {
    text-align: center;
    margin: 10px;
    font-family: Noto Sans;
    text-decoration: underline;
    color: navy;
}

.cart-item {
    border-top: 1px solid slateblue;
    margin: 0 20px
}

.item-name {
    margin: 0;
    font-family: Noto Sans;
}

.item-content {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
}

img {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

p {
    margin: 0;
    color: deeppink;
    text-align: center;
    padding-bottom: 10px;
    font-size: 0.8rem;
}

button {
    text-align: center;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
    background-color: rgb(250, 226, 229);
    margin: 20px 50px;
    font-family: Noto Sans;
}

@keyframes drop-down {
    0%  {
        top: -100%;
    }
    100% {
        top: 70px;
    }
}

@keyframes dissapear {
    0%  {
        top: 70px;
    }
    100% {
        top: -100%;
    }
}


@media screen and (max-width: 400px) {
    .cart-container {
        width: 93%;
    }
}
</style>