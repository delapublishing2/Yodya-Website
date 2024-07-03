const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

const app = express();
app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card', 'apple_pay'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'Donation'
                },
                unit_amount: amount * 100
            },
            quantity: 1
        }],
        mode: 'payment',
        success_url: 'https://yourdomain.com/success',
        cancel_url: 'https://yourdomain.com/cancel'
    });

    res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server running on port 3000'));
