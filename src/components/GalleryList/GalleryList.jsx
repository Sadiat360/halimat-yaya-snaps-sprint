import './GalleryList.scss';
import photosData from '../../data/photos.json';
import { useState } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';

function GalleryList(props){
    const [photos, setPhotos] = useState (photosData);
    
   

    let filteredPhotos = [];

    if (props.selectedTag !== "") {
        filteredPhotos = photos.filter((photo) => {
            return photo.tags.includes(props.selectedTag);
        });
    } else {
        filteredPhotos = photos
    }

    return(

        <section className='gallery'>
           
           { filteredPhotos.map((photo) => {
                    return <GalleryCard key ={photo.id}  photo = {photo}/>
                   })} 
               
           
        </section>
    )
}

export default GalleryList;