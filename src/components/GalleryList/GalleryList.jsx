import './GalleryList.scss';
// import photosData from '../../data/photos.json';
import { useState, useEffect } from 'react';
import GalleryCard from '../GalleryCard/GalleryCard';
import axios from 'axios'

function GalleryList(props){
    const [photos, setPhotos] = useState ([]);

    useEffect(() =>{

        async function getPhoto() {
           const response = await axios.get(
              "http://localhost:8080/photos/"
           );

           setPhotos(response.data);
           
        }
        getPhoto();
    
     }, []);
  
    
   

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