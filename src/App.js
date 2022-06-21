import Navbar from './routes/navbar/navbar-component';
import { Routes, Route} from 'react-router-dom';
import Donations from './routes/donations/donations-component';
import Home from './routes/home/home-component';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='donations' element={<Donations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
