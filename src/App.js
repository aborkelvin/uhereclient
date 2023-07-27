import logo from './logo.svg';


import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/about';

function App() {
  
  return (
    <BrowserRouter>
        <div className="">          
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path = '/about' element = { <About /> } />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
