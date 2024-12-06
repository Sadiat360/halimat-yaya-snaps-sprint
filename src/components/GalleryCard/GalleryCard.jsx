import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GalleryCard.scss';
import axios from 'axios';

function GalleryCard({photo}){
   
   useEffect(() =>{
      async function getPhoto() {
         const response = await axios.get(
            "https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=019425bb-7b53-4fc1-b033-f24347776ef9"
         );
         // console.log(response.data);
      }
      getPhoto();
  
   }, []);
     

    return(

     <figure className='gallery-item'>

       <Link to= {`/photo/${photo.id}`} key={photo.id}>
       <img src={photo.photo} alt="image" className='gallery-item__image' />
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