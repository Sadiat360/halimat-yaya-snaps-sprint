import './Footer.scss';
import Facebook from '../../assets/Icons/Facebook.svg';
import Instagram from '../../assets/Icons/Instagram.svg';
import X_twitter from '../../assets/Icons/X_twitter.svg';
import Pinterest from '../../assets/Icons/Pinterest.svg';


function Footer (){
  const thisYear = new Date().getFullYear();
 
    return(
      <footer className='footer'>

        <div className='footer-frame'>

          <div className='footer-logo-lists__container'>

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
            </div>
               
               
       
          <figure className='footer-icon__links'>
       
                 <a className='footer-icon__anchor' href="https://www.facebook.com/">
                 <img src={Facebook} alt="Facebook Icon" className="footer-icon__image" />
                     </a>
               
                 <a className='footer-icon__anchor' href="https://www.twitter.com/">
                 <img src={X_twitter} alt="X-twitter Icon" className="footer-icon__image" />
                     </a>
       
                 <a className='footer-icon__anchor' href="https://www.instagram.com/">
                 <img src={Instagram} alt="Instagram Icon" className="footer-icon__image" />
                     </a>
                 <a className='footer-icon__anchor' href="https://www.pinterest.com/">
                 <img src={Pinterest} alt="Pinterest Icon" className="footer-icon__image" />
                     </a>
           </figure>
       
        </div>
         
         <ul className='footer-copryt__box'>
          
            <li className='footer__copryt'>  &copy; {thisYear} Snaps</li>
            <li className='footer__copryt'>. Terms</li>
            <li className='footer__copryt'>Privacy</li>
            <li className='footer__copryt'>Cookies</li>

          </ul> 

          
         
         
        
      
      </footer>
    )
}
export default Footer;