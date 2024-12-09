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
   const baseURL = "https://unit-3-project-c5faaab51857.herokuapp.com";

   photoDetails.timestamp = new Date().toLocaleDateString();
  
  
   
   
    /// function to get photos////////
    
   useEffect(() =>{
      async function getPhotoDetails() { 

        try{
            const response = await axios.get(
                `${baseURL}/photos/${params.photoId}/?api_key=019425bb-7b53-4fc1-b033-f24347776ef9`
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
            
                `${baseURL}/photos/${params.photoId}/comments?api_key=019425bb-7b53-4fc1-b033-f24347776ef9`
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
             const response = await axios.post(`${baseURL}/photos/${params.photoId}/comments?api_key=019425bb-7b53-4fc1-b033-f24347776ef9`, newComment); 
             setComments((comments) =>[response.data, ...comments]);
           
         } catch (error){
             console.error('error posting comment:', error);
         }
      
       
     }
 

    function handleFormSubmit({userName, text}){


        
        if (userName === "" || text === ""){
            alert("Pleas fill all input fields")

            return;
        } 
          
           

        const newComment = {
            name: userName,
            comment: text,

            ///whenever i post a new comment it shows at the top of the comment lists
            /// however, when i refresh it goes to the bottom.
            
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

            return (<PhotoComments key={comment.id || index} comment={{...comment, timestamp: new Date(comment.timestamp).toLocaleDateString(),}} />) 

           

             })}  
        
           </div >

           </section>
          
          
        </>
    


    )
}
export  default  PhotoDetailsPage;