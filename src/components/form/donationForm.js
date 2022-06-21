import Button from "../button/button-component";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './form-styles.css';


const DonationForm = () => {

    const stripe = useStripe();
    const elements = useElements();

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
            body: JSON.stringify({amount: 5000})
        }).then(res => res.json())

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "John Wick",
                }
            }
        })

        if(paymentResult.error){
            alert(paymentResult.error)
        }
        if(paymentResult.paymentIntent.status === 'succeeded'){
            alert('payment successful')
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
                <label htmlFor="firstName">First Name</label>
                <input placeholder="John" className="form-control" name="firstName" type={'text'} />
            </section>
            <section className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input placeholder="Doe" className="form-control" name="lastName" type={'text'} />
            </section>
            <section className="form-group">
                <label htmlFor="address">Amount</label>
                <input placeholder="20.00" className="form-control" name="address" type={'number'} />
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