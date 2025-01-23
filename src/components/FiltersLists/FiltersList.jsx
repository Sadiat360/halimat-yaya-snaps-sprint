import './FiltersList.scss';
import Filters from '../Filters/Filters';
import { useEffect, useState } from 'react';
import axios from 'axios';


function FiltersList ({selectedTag, handlephotochange}){

     const [tags, setTags] = useState([]);

     useEffect(() =>{
        async function getTags() {
  
          try{
            const response = await axios.get('https://snapsweb-028984f51f2c.herokuapp.com/tags/');
    
            setTags(response.data);
          } catch (error){
            console.error('Error getting tags:', error)
          }
          
         }
         getTags();
       
     }, []);
    
    
  return (
    
     <section className='filters'>

            <h2 className='filters-tag'>Filters</h2>  

            <ul className='filters-box'>

           {tags.map((tag,index) => (<Filters key = {index} tag = {tag} 
           
           isSelectedTag={selectedTag === tag} onClick={handlephotochange}  /> 
          
        ))} 

          </ul>
      </section>
    )
    
}
 export default FiltersList;

 
