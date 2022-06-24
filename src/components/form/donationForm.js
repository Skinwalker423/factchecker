import Button from "../button/button-component";
import { useState } from "react";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import './form-styles.css';


const DonationForm = () => {

    const [fullName, setFullName] = useState('Guest');
    const [amount, setAmount] = useState(0);

    const stripe = useStripe();
    const elements = useElements();

    const onNameChangeHandler = (e) => {
        setFullName(e.target.value)
    }
    const onAmountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const paymentFormHandler = async (e) => {
        e.preventDefault();

        if(!stripe || !elements){
        return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then(res => res.json())

        const clientSecret = response.paymentIntent.client_secret;

        const {paymentIntent, error} = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: fullName
                }
            }
        })

        if(error){
            alert(error)
        }
        if(paymentIntent.status === 'succeeded'){
            console.log(fullName, amount);
            alert('payment successful');
        }

    }



    const inputStyle = {
      iconColor: 'red',
      color: '#ff0',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '25px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#87BBFD',
      },
}

    return (
        <div className="container donationBody">
        <form onSubmit={paymentFormHandler} className="donationForm">
            <h1>Donation Form</h1>
            <section className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input onChange={onNameChangeHandler} placeholder="John" className="form-control" name="fullName" type={'text'} />
            </section>
            <section className="form-group">
                <label htmlFor="address">Amount</label>
                <input onChange={onAmountChangeHandler} placeholder="20.00" className="form-control" name="address" type={'number'} />
            </section>
            <div className="cardInputContainer">
                <CardElement className="cardInput" options={{
                    style: {
                        base: inputStyle,
                    }
                }} />
            </div>
            <Button title='Donate Now' />
        </form>
        </div>
    )
}

export default DonationForm;