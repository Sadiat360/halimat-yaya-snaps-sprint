import './FiltersList.scss';
import Filters from '../Filters/Filters';
import tagData from '../../data/tags.json';

function FiltersList ({selectedTag, handlephotochange}){
    
   
    
  return (
    
     <section className='filters'>

            <h2 className='filters-tag'>Filters</h2>  

            <ul className='filters-box'>

           {tagData.map((tag,index) => (<Filters key = {index} tag = {tag} 
           
           isSelectedTag={selectedTag === tag} onClick={handlephotochange}  /> 
          
        ))} 

          </ul>
      </section>
    )
    
}
 export default FiltersList;

 
