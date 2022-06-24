import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const Form = () => {

    const elements = useElements();
    const stripe = useStripe();

    const paymentFormHandler = async(e) => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }
        
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: 2500})
        }).then(res => res.json())

        const clientSecret = response.paymemtIntent.client_secret;

        const paymentResponse = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'John Doe'
                }
            }
        })

        if(paymentResponse.error){
            alert(paymentResponse.error)
        }

        if(paymentResponse.paymentIntent.response === 'succeeded'){
            alert('payment successful')
        }
    
    }

    return (
        <div onSubmit={paymentFormHandler}>Form</div>
    )
}
