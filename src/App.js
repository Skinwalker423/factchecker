import Navbar from './routes/navbar/navbar-component';
import { Routes, Route} from 'react-router-dom';
import Donations from './routes/donations/donations-component';
import Home from './routes/home/home-component';
import './App.css';
import Authorization from './routes/authorication/authorization-component';
import { useEffect } from 'react';
import ForgotPassword from './routes/forgotPassword/forgotPassword';
import DashBoard from './routes/dashboard/DashBoard';
import { useAuth } from './context/AuthContext';

const App = () => {

  const {currentUser} = useAuth();

  useEffect(() => {
    

  }, [])

  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path='/dashboard' element={currentUser ? <DashBoard /> : <Authorization />} />
              <Route path='donations' element={<Donations />} />
              <Route path='authorization' element={<Authorization />} />
              <Route path='forgotpassword' element={<ForgotPassword />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
