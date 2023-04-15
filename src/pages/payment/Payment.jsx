import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/checkoutForm/CheckoutForm.jsx';
// const stripePromise = loadStripe(pro cess.env.NEXT_PUBLIC_PUBLISHABLE_KEY);
import './payment.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toCurrencyFormated } from '../../utils/currency.js';
const Payment = () => {
  const { items } = useSelector((state) => state.cart);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');

  const [amount, setAmount] = useState(0);

  // set public
  useEffect(() => {
    try {
      const publicKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
      console.log(publicKey);
      setStripePromise(loadStripe(publicKey));

      const _amount = items.reduce((acc, item) => {
        return acc + item.product.attributes.price * item.quantity;
      }, 0);
      setAmount(_amount);
    } catch (error) {
      debugger;
    }
  }, [items]);

  useEffect(() => {
    async function stripeIntents() {
      try {
        const currency = 'thb';
        const { data } = await axios.post(
          // 'http://localhost:1377/create-payment-intent',
          'http://localhost:1337/api/orders',
          {
            products: [],
            email: 'chutchai.kp@gmail.com',
            amount,
            currency,
          }
        );
        const _clientSecret = data.clientSecret;
        setClientSecret(_clientSecret);
      } catch (error) {
        debugger;
      }
    }

    if (items.length > 0 && amount > 0) {
      stripeIntents();
    }
  }, [amount]);

  return (
    <div className="payment">
      <div className="wrapper">
        <div className="summary">
          <h1> Cart summary </h1>
          <div className="amount">{toCurrencyFormated(amount)}</div>
          <div className="items">
            {items.map((item, idx) => {
              const img =
                import.meta.env.VITE_SERVER_URL +
                item.product.attributes.picture.data.attributes.formats.small
                  .url;
              const productName = item.product.attributes.title;
              const productQuantity = item.quantity;
              const total =
                item.quantity * parseFloat(item.product.attributes.price);
              const totalFormated = toCurrencyFormated(total);

              return (
                <div key={idx.toString()} className="item">
                  <div className="image">
                    <img src={img} alt="" />
                  </div>
                  <div className="nameQuantity">
                    <p className="name">{productName}</p>
                    <span>Qty {productQuantity}</span>
                  </div>
                  <div className="total">{totalFormated}</div>
                </div>
              );
            })}
          </div>
          <div className="totalDue">
            <div className="text">Total due</div>
            <div className="value">{toCurrencyFormated(amount)}</div>
          </div>
        </div>
        <div className="checkoutForm">
          {stripePromise && clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};
export default Payment;
