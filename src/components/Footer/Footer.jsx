import './Footer.scss';
import Facebook from '../../assets/Icons/Facebook.svg';
import Instagram from '../../assets/Icons/Instagram.svg';
import X_twitter from '../../assets/Icons/X_twitter.svg';
import Pinterest from '../../assets/Icons/Pinterest.svg';


function Footer (){


    return(
        <footer className='footer'>
        <div className='footer-logo-lists-links__container'>

                <a className='footer-container__logo' href="#">Snaps</a>
        
               <article className='footer-container__lists'>

                   <ul className='footer-container__box'>
                     <li className='footer-container__item'>For photographers</li>
                     <li className='footer-container__item'>Hire talent</li>
                     <li className='footer-container__item'>Inspiration</li>
                   </ul>
           
                   <ul className='footer-container__box'>
                     <li className='footer-container__item'>About</li>
                     <li className='footer-container__item'>Career</li>
                     <li className='footer-container__item'>Support</li>
                   </ul>
               </article>
               
       
               <figure className='footer-icon__links'>
       
                    <a className='footer-icon__anchor' href="#">
                    <img src={Facebook} alt="Facebook Icon" className="footer-icon__image" />
                        </a>
                  
                    <a className='footer-icon__anchor' href="#">
                    <img src={X_twitter} alt="X-twitter Icon" className="footer-icon__image" />
                        </a>
       
                    <a className='footer-icon__anchor' href="#">
                    <img src={Instagram} alt="Instagram Icon" className="footer-icon__image" />
                        </a>
                    <a className='footer-icon__anchor' href="#">
                    <img src={Pinterest} alt="Pinterest Icon" className="footer-icon__image" />
                        </a>
              </figure>
       
        </div>
         
      
      </footer>
    )
}
export default Footer;