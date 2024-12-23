import { Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './index.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    
    </>
  );
}

export default App;
