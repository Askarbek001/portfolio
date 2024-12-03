import "./promo.css"
import promoImg from "./../../images/Logo/header-image.jpg"

const Promo = () => {
  return ( 
    <section className="promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highlight"><span>LET’S </span></span>
               EXPLORE
               <span className="highlight highlight__yellow"><span>UNIQUE </span></span> 
               CLOTHES.
            </div>
            <div className="promo__subtitle">
              Live for Influential and Innovative fashion!
            </div>
            <div className="promo__btn__wrapper">

              <button><a className="promo__btn" href="#!">Shop Now</a></button>
            </div>
          </div>
          <div>
            <img className="promo__image" src={promoImg} alt="Promo"/>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Promo;