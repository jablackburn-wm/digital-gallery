const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


const mainRouter = require('./server/router');
const connectDB = require('./server/db')
const { errorHandlerMiddleware, notFound } = require('./server/middleware');

const storeItems = require('./server/data/storeItems.js')

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const cors = require("cors");


const express = require('express');
const app = express();

app.use(cors({ origin: true}));

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


app.use(mainRouter);

app.use(errorHandlerMiddleware);
app.use(notFound);

const username = process.env.ATLAS_USERNAME
const password = process.env.ATLAS_PASSWORD



connectDB(`mongodb+srv://${username}:${password}@portfolio-cluster.sknurkv.mongodb.net/e-commerce?retryWrites=true&w=majority`);

exports.api = onRequest(app);
