import './GalleryList.scss';
import photosData from '../../data/photos.json';
import { useState } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';

function PhotosList(props){
    const [photos, setPhotos] = useState (photosData);

    console.log("photo data is wroking: ", props);

    return(

        <section className='gallery'>
           

           {photos.map((photos) => {
                    return <GalleryCard key ={photos.id}  image = {photos}/>
                   })}
           {/* <div className='gallery__item-frame'>

              

           </div> */}
               
               
           
        </section>
    )
}

export default PhotosList;