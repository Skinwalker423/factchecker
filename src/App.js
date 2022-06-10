import Navbar from './components/navbar/navbar-component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
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
    </div>
  );
}

export default App;
