import './Filters.scss';

function Filters ({name}){

    return(

        <button className='filter-cta'
        variant= "secondary"
        styles= "{['round']}"
        size= "medium"> {name} </button>
 
            //  <li className='filter-cta'> {name}</li>
       
    )
}

export default Filters;