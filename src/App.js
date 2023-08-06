import logo from './logo.svg';


import './App.css';
import Home from './pages/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/about';
import ProspectiveStudents from './pages/prospectiveStudents/prospectiveStudents';
import Contact from './pages/contact/contact';
import Donate from './pages/donate/donate';

function App() {
  
  return (
    <BrowserRouter>
        <div className="">          
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path = '/about' element = { <About /> } />
            <Route path='/prospectivestudents' element = { <ProspectiveStudents /> } />
            <Route path = '/contact' element = { <Contact /> } />
            <Route path = '/donate' element = { <Donate />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
