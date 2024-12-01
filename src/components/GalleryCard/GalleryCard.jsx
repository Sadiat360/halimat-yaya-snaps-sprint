
import './GalleryCard.scss';


function GalleryCard(props){


    return(

     <figure className='gallery-item'>
        <img src={props.image.photo} alt="image" className='gallery-item__image' />
        <p className='gallery-item__title'>{props.image.photographer}</p>

           <ul className='gallery-item__tags'>
           {props.image.tags.map((tag,index) => {
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