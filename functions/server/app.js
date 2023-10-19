require('dotenv').config();
require('express-async-errors');

const connectDB = require('./db')
const express = require('express');
const app = express();
const mainRouter = require('./router');
const path = require('path')

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const storeItems = require('./data/storeItems.js')

const { errorHandlerMiddleware, notFound } = require('./middleware');

app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `https://digital-gallery-b298d.web.app/success`,
      cancel_url: `https://digital-gallery-b298d.web.app/failure`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})


app.use('/api/v1', mainRouter);

app.use(errorHandlerMiddleware);
app.use(notFound);

const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD


try {
	await connectDB(`mongodb+srv://${username}:${password}@portfolio-cluster.sknurkv.mongodb.net/e-commerce?retryWrites=true&w=majority`);
} catch (error) {
	console.log(error);
}

module.exports = app
