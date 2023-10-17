<template>
<div>

<h1 class="card-info">Stripe is in test mode - Use test card information</h1>
<p class="card-info">card # : 4242 4242 4242 4242</p>
<p class="card-info">expiration date : 4/24</p>
<p class="card-info">security code : 424</p>

<div class="checkout-container">
    <div class="items">
        <div class="header">
            <h3 class="title">Shopping Cart</h3>
            <p class="user">user: {{this.$store.state.user}}</p>
        </div>
        <div class="empty" v-if="this.$store.state.shoppingCart.length === 0">cart empty</div>
        <div class="cart-item" v-for="item in this.$store.state.shoppingCart" :key="item._id">
            <div class="item-content">
                <h4 class="item-name">{{item.name.replace(/-/g, " ")}}</h4>
                <img src="../assets/remove-button.png" alt="remove from cart" class="delete" @click="remove(item._id)">
            </div>
            <p class="price">$ {{item.price}}</p>
        </div>
        <h2 class="total">Total: ${{total}}</h2>
    </div>
    <Address v-if="this.$store.state.shoppingCart.length > 0" @checkout="checkout" />
</div>
</div>
</template>


<script>
import Address from './Address.vue'
import axios from 'axios'

export default {
    components: {
        Address
    },
    methods: {
        remove(id) {
            this.$store.commit('removeFromCart', id)
        },  

        checkout() {
            let itemsArray = []
            for (let i = 0; i < this.$store.state.shoppingCart.length; i++) {
                itemsArray.push({ id: this.$store.state.shoppingCart[i].item_id, quantity: 1 })
            }
            fetch("https://artists-ecommerce.herokuapp.com/create-checkout-session", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                items: itemsArray,
                }),
            })
            .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
            window.location = url
            })
            .catch(e => {
            console.error(e.error)
            })
        },
    },

    computed: {
        total() {
            let sum = 0
            for (let i = 0; i < this.$store.state.shoppingCart.length; i++) {
                sum += this.$store.state.shoppingCart[i].price
            }
            return sum
        }
    }
}
</script>


<style scoped>

.card-info {
    text-align: center;
    margin: 10px;
}

h1.card-info {
    color: navy;
}



.checkout-container {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
}

.items {
    width: 45%;
}

.header {
    text-align: center;
    border-bottom: 1px solid black;
    margin: 0 20px 10px 20px;
}

.empty {
    text-align: center;
    font-size: 1.5rem;
}

.cart-item {
    text-align: center;
    margin: 10px 20px;
    border-bottom: 1px solid black;
    position: relative;
}

.title {
    font-size: 2rem;
    margin: 0;
    color: navy;
}

.user {
    color: deeppink;
}

.delete {
    cursor: pointer;
    position: absolute;
    top: -5px;
    right: 15px;
    width: 20px;
}

.total {
    text-align: center;
    color: deeppink;
}


@media screen and (max-width: 750px) {
h1.card-info {
    font-size: 1.3rem;
}

.checkout-container {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.items {
    width: 75%;
    margin-bottom: 50px;
}

}

@media screen and (max-width: 500px) {
.card-info {
    font-size: 0.75rem;
}

h1.card-info {
    font-size: 1rem;
}

.items {
    width: 100%;
}


}


</style>