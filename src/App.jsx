import {useState} from 'react';
import './App.scss';
import FiltersList from './components/FiltersLists/FiltersList';
import GalleryList from './components/Gallery/GalleryList/GalleryList';
import Filter from './assets/Icons/Filter.svg';

function App() {

 
  

 const [openFilter, setOpenFilter] = useState(false);

    //  if (openFilter === true){
    //   console.log("filter opened");
    //  } else {
    //     console.log ("filter closed");
    //  } 

 openFilter === true 
    ? console.log("filter opened"):
    console.log ("filter closed");

 function handleFilterClick () {
    console.log("button clicked");
    setOpenFilter(!openFilter);
 }


  return (
    <>
    
    <header className='header'>
       <a className='header__logo' href="#">Snaps</a>

       <nav className='header__nav'>

       <button className='default-cta' onClick = {handleFilterClick} > Filter<img src= {Filter}  alt="filter icon"/></button>

       </nav>

    </header>

    <main>

       {/*//////// filter ////// */}
      
       { openFilter === true ? ( <FiltersList />): " " }
         
         

          {/*//////// hero////// */}

      <section className='hero'>
        <article className='hero__content'>
        <p className='hero__mission'>Our mission:</p>
        <p className='hero__title'>Provide photographers a space to share photos of the 
          neighborhoods they cherish, <span className='hero__title-italic'>expressed in their unique style.</span>
        </p>
        </article>


        <GalleryList />
      </section>

     
      </main>
    </>
  )
}

export default App
