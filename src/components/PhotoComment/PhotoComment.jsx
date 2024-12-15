import './photoComment.scss';
import { formatDate } from '../../utils/utils';


function PhotoComments({ comment }){

  
    return(
    
        <div className='comment-box__content'>
                  
                 
                 <div className='comment-box__frame'>
                     <p className='comment-box__name'>{comment.name}</p>
                     <p className='comment-box__date'>{formatDate(comment.timestamp)}</p>
                 </div>
                 <p className='comment-box__msg'>{comment.comment}</p>

        </div>         
       
    

    )
}

export default PhotoComments;



