import { Container } from "react-bootstrap";
import './home-styles.css';



const Home = () => {

    return (
        <Container className="home-container" >
            <header className="home-header">
                <img src={'./check.png'} className="App-logo" alt="logo" />
                <p className='title'>
                <span className='fact'>FACT</span><span className='checker'>CHECKER</span><span className='lol'>.LOL</span>
                </p>
                <a
                className="App-link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                >
                Coming Soon
                </a>
            </header>
        </Container>
    )
}

export default Home;