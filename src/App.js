import Navbar from './routes/navbar/navbar-component';
import { Routes, Route} from 'react-router-dom';
import Donations from './routes/donations/donations-component';
import Home from './routes/home/home-component';
import './App.css';
import Authorization from './routes/authorication/authorization-component';
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';

const App = () => {

  useEffect(() => {
    

  }, [])

  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='donations' element={<Donations />} />
              <Route path='authorization' element={<Authorization />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
