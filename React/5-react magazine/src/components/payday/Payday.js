import "./payday.css"
import image from "./../../images/Payday/image 12.jpg"


const Payday = () => {
  return ( 
    <section className="payday">
      <div className="container">
        <div className="payday__content">
          <div>
            <img className="payday__img" src={image} alt="Payday"/>
          </div>
          <div className="payday__text">
            <div className="payday__title"><span>PAYDAY</span> SALE NOW</div>
            <div className="payday__subtitle">Spend minimal $100 get 30% off voucher code for your next purchase</div>
            <div>
              <h3 className="payday__date">1 June - 10 June 2021</h3>
              <p className="payday__info">*Terms & Conditions apply</p>
            </div>
            <button className="payday__btn">SHOP NOW</button>
          </div>
        </div>
      </div>    
    </section>        
   );
}
 
export default Payday;