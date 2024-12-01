import './Filters.scss';

function Filters ({tag, isSelectedTag, onClick}){



    return(

        <button 

            className={`filter-cta ${isSelectedTag ? 'active' : ''}`}
            onClick ={() => onClick(tag)}

             > {tag} </button>

       
    )
}

export default Filters;