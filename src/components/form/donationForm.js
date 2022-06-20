import Button from "../button/button-component";
import { CardElement } from "@stripe/react-stripe-js";
import './form-styles.css';


const DonationForm = () => {
    return (
        <div className="container donationBody">
        <form className="donationForm">
            <h1>Donation Form</h1>
            <section className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input className="form-control" name="firstName" type={'text'} />
            </section>
            <section className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input className="form-control" name="lastName" type={'text'} />
            </section>
            <section className="form-group">
                <label htmlFor="address">Address</label>
                <input className="form-control" name="address" type={'text'} />
            </section>
            <div className="cardInputContainer">
                <CardElement className="cardInput" />
            </div>
            <Button title='Donate Now' />
        </form>
        </div>
    )
}

export default DonationForm;