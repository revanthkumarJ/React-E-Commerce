import { Router } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './index.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
