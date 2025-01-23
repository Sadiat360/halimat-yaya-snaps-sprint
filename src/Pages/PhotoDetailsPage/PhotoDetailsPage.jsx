import './PhotoDetailsPage.scss';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import CommentForm from '../../components/CommentForm/CommentForm';
import PhotoComments from '../../components/PhotoComment/PhotoComment';
import SinglePhoto from '../../components/SinglePhoto/SinglePhoto';
import Header from '../../components/Header/Header';



function PhotoDetailsPage(props){
   const [photoDetails, setPhotoDetails] = useState({});
   const [comments, setComments] = useState([]);

   
   const params = useParams();
   
   
    /// function to get photos////////
    
   useEffect(() =>{
      async function getPhotoDetails() { 

        try{
            const response = await axios.get(
                `https://snapsweb-028984f51f2c.herokuapp.com/photos/${params.photoId}/`
            );
           
            setPhotoDetails(response.data);
         
        } catch (error){
            console.error('error getting photo details:', error);
        }
        
      }
      getPhotoDetails();
   }, []);
   
  
   /// function to get comments////////

    useEffect(() => {
      async function getComments(){

        try{
            const response = await axios.get(
            
                `http://localhost:8080/photos/${params.photoId}/comments`
            );
           
            setComments(response.data);
   
        }catch (error){
            console.error('error getting photo comments:', error);
        }
        
         
     }
     getComments();
      
    }, [])
  
 
    async function postComment(newComment) {

         try{
             const response = await axios.post(`http://localhost:8080/photos/${params.photoId}/comments`, newComment); 
             setComments((comments) =>[response.data, ...comments]);

          
         } catch (error){
             console.error('error posting comment:', error);
         }
      
     }
 

    function handleFormSubmit({name, comment}){

        
        if (name === "" || comment === ""){
            alert("Pleas fill all input fields")

            return;
        } 

        const newComment = {
            name: name,
            comment: comment,
            
        };
       postComment(newComment);
       
       
    }
    
    return (
        <>
         <Header isHome={false}/>


          <SinglePhoto  photoDetails={photoDetails}/>

          <section className='comment'>
           
          
           <CommentForm handleFormSubmit={handleFormSubmit} />

           <div className='comment-box'>

              <p className='comment-box__number'>{comments.length} Comments</p> 

            {comments.map((comment, index) =>{

            return (<PhotoComments key={comment.id || index} comment={comment}  />) 

             })}  
        
           </div >

           </section>
          
          
        </>
    


    )
}
export  default  PhotoDetailsPage;