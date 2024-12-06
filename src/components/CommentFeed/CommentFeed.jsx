import './CommentFeed.scss';
import axios from 'axios';


function CommentFeed(){

    // "api_key": "019425bb-7b53-4fc1-b033-f24347776ef9"
    function handleFormSubmit(event){
        event.preventDefault();
        console.log(event.target.userName.value);
        console.log(event.target.text.value);
 
        const userName = event.target.userName.value;
        const text = event.target.text.value;

        if (userName === "" || text === ""){
            alert("Fill all input fields")
        } else {
            console.log("User Name:", userName);
            console.log("Comment:", text);
        }

       event.target.reset();
    }
    
    async function getComments(){

        const response = await axios.get("https://unit-3-project-c5faaab51857.herokuapp.com/photos/6be619d5-de2c-4f62-ac1b-bd2e36d71ab9/comments?api_key=019425bb-7b53-4fc1-b033-f24347776ef9");
        console.log(response);
        
    }
    getComments()

    
    return (
        <> 
        <section className='comment'>

             <form onSubmit={handleFormSubmit} className='comment-form'>

                <label className='comment-form__label' htmlFor='name'>Name</label>
                 <input className='comment-form__input' name='userName' type='text' />
                 
                 <label className='comment-form__label' htmlFor='comment'>Comment</label>
                 <textarea className='comment-form__text' name="text" row='15'></textarea>

                 <button className='comment-form__btn'>Submit</button>


             </form>

        </section>

        <section className='comment-box'>
                <p className='comment-box__title'>3 Comments</p>

                <div className='comment-box__content'>

                    <div className='comment-box__frame'>
                        <p className='comment-box__name'>Cassey Schmidt</p>
                        <p className='comment-box__date'>08/29/2024</p>
                    </div>
                    <p className='comment-box__msg'>The mood and atmosphere in this shot are beautiful.</p>

                </div>
                <div className='comment-box__content'>

                    <div className='comment-box__frame'>
                        <p className='comment-box__name'>Elena Rossi</p>
                        <p className='comment-box__date'>08/27/2024</p>
                    </div>
                    <p className='comment-box__msg'>I love the details captured here, especially the architecture.</p>

                </div>
                <div className='comment-box__content'>

                    <div className='comment-box__frame'>
                        <p className='comment-box__name'>Cassey Schmidt</p>
                        <p className='comment-box__date'>08/29/2024</p>
                    </div>
                    <p className='comment-box__msg'>The mood and atmosphere in this shot are beautiful.</p>

                </div>

                 


             </section>
           
             </>

        
    )
}
export default CommentFeed;