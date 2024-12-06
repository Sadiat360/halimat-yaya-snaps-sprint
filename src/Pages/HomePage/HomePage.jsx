import { useState } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import FiltersList from '../../components/FiltersLists/FiltersList';
import GalleryList from '../../components/GalleryList/GalleryList';

function HomePage() {

    const [openFilter, setOpenFilter] = useState(false);
    const [selectedTag, setSelectedTag] = useState (""); 
    
    function handlephotochangeClick (tag) {
   
     setSelectedTag((selectedTag) => (selectedTag === tag ? "" : tag));
    } 
   
    
    function handleFilterClick () {
     setOpenFilter(!openFilter);
   }
  
   
    return(
    <>
        
      
      <Header handleHomeFilter = {handleFilterClick}/>
  
      <div className='container'>
  
          {/*/////////////// filter ///////////////// */}
            
           { openFilter === true ? ( <FiltersList handlephotochange ={handlephotochangeClick} selectedTag= {selectedTag}/>): null } 

           <main>
          {/*/////////////// hero/////////////// */}
          
          <section className='hero'>
            <article className='hero__content'>
            <p className='hero__mission'>Our mission:</p>
            <p className='hero__title'>Provide photographers a space to share photos of the 
              neighborhoods they cherish, <span className='hero__title-italic'>expressed in their unique style.</span>
            </p>
            </article>

          </section>

          
            {/*/////////////// gallery/////////////// */}

            <GalleryList selectedTag= {selectedTag} />
          </main>
      
           
       </div>
    </>
    )
}
export default HomePage;