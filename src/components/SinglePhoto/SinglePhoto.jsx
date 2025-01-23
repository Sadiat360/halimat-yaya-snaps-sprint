import './SinglePhoto.scss';
import { formatDate } from '../../utils/utils';

function SinglePhoto ({photoDetails}){

    return (

      
        <section className='single-Photo'>
            <figure className='single-Photo__box'>
         <img className='single-Photo__image' src= {`https://snapsweb-028984f51f2c.herokuapp.com/images/${photoDetails.photo}`} alt='image'/>
         
        
        <div className='single-Photo__container'>
        
            <ul className='single-Photo__tags'>
             {photoDetails.tags?.map((tag,index) => {
                 return(
        
                    <li 
                    key ={index} className='single-Photo__tags-list'>
                       {tag}
                    </li>
                 );
             })}
          </ul>
             <ul className='single-Photo__deets'>
        
                    <div className='single-Photo__frame'>
                        
                    <li className='single-Photo__list'><svg className='single-Photo__icon' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.875 0C9.57 0 8.3175 0.617984 7.5 1.59455C6.6825 0.617984 5.43 0 4.125 0C1.815 0 0 1.84632 0 4.19619C0 7.08011 2.55 9.42997 6.4125 13.0005L7.5 14L8.5875 12.9929C12.45 9.42997 15 7.08011 15 4.19619C15 1.84632 13.185 0 10.875 0ZM7.575 11.8638L7.5 11.9401L7.425 11.8638C3.855 8.57548 1.5 6.40109 1.5 4.19619C1.5 2.6703 2.625 1.52589 4.125 1.52589C5.28 1.52589 6.405 2.2812 6.8025 3.32643H8.205C8.595 2.2812 9.72 1.52589 10.875 1.52589C12.375 1.52589 13.5 2.6703 13.5 4.19619C13.5 6.40109 11.145 8.57548 7.575 11.8638Z" fill="#0C1E1A"/>
                    </svg> {photoDetails.likes} likes</li>

                    <li className='single-Photo__date'>{formatDate(photoDetails.timestamp)}</li>
        
                    </div>
                    
                    <p className='single-Photo__title'>Photo by{photoDetails.photographer}</p>
               
             </ul>
        
             </div>
        </figure>
        
        </section>
        
    )
}

export default SinglePhoto;
