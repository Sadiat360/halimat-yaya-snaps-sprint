import './CommentForm.scss';
import { useState } from 'react';


function CommentForm({handleFormSubmit}){
 
    const [ formValues, setFormValues] = useState({name:'', comment:''});


    function handleInputChange(event){
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    }

    function onSubmit(event){
        event.preventDefault();
        handleFormSubmit(formValues);

        setFormValues({name:'', comment:''});

    }

    
    
    return (
        <> 
       

             <form onSubmit={onSubmit} className='comment-form'>

                <label className='comment-form__label' htmlFor='name'>Name</label>

                 <input className='comment-form__input' 
                 onChange={handleInputChange}
                 name='name' 
                 type='text'  
                 value ={formValues.name}/>
                 
                <label className='comment-form__label' htmlFor='comment'>Comment</label>

                 <textarea className='comment-form__text'
                  onChange={handleInputChange}
                  name="comment" 
                  row='15' 
                  value ={formValues.comment}>

                  </textarea>

                 <button className='comment-form__btn'>Submit</button>


             </form>
         
           
             </>

        
    )
}
export default CommentForm;