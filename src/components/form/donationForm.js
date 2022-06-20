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
        <form className="donationForm">
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