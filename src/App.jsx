// import {useState} from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import PhotoDetailsPage from './Pages/PhotoDetailsPage/PhotoDetailsPage';

function App() {

  return (
    
    <BrowserRouter>
    <Routes> 

      <Route path='/' element={<HomePage />} />
      <Route path='/photo/:photoId' element={<PhotoDetailsPage />} />
    </Routes>
    <Footer />
    </BrowserRouter>

     
     
   
  );
}

export default App
