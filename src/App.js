import Navbar from './routes/navbar/navbar-component';
import { Routes, Route} from 'react-router-dom';
import Donations from './routes/donations/donations-component';
import Home from './routes/home/home-component';
import './App.css';
import Authorization from './routes/authorication/authorization-component';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='donations' element={<Donations />} />
            <Route path='authorization' element={<Authorization />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
