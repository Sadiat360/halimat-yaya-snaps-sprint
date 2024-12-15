import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GalleryCard.scss';
import axios from 'axios';

function GalleryCard({photo}){
   
 

    return(

     <figure className='gallery-item'>

       <Link to= {`/photo/${photo.id}`} >
       <img src={`http://localhost:8080/images/${photo.photo}`} alt="image" className='gallery-item__image' />
       </Link> 
       

        <p className='gallery-item__title'>{photo.photographer}</p>

           <ul className='gallery-item__tags'>
           {photo.tags.map((tag,index) => {
               return(

                  <li 
                  key ={index} className='gallery-item__tags-list'>
                     {tag}
                  </li>
               );
           })}

        </ul>
     </figure>
    );

    
}
export default GalleryCard;