import "./brands.css"
import hm from "./../../images/Brands/HM.svg"
import obey from "./../../images/Brands/Obey.svg"
import shopify from "./../../images/Brands/Shopify.svg"
import lacoste from "./../../images/Brands/Lacoste.svg"
import levis from "./../../images/Brands/Levis.svg"
import amazon from "./../../images/Brands/Amazon.svg"

const Brands = () => {
  return ( 
  <section className="brands">
    <div className="container">
      <ul className="brands__list">
        <li><a href="#!"><img src={hm} alt=""/></a></li>
        <li><a href="#!"><img src={obey} alt=""/></a></li>
        <li><a href="#!"><img src={shopify} alt=""/></a></li>
        <li><a href="#!"><img src={lacoste} alt=""/></a></li>
        <li><a href="#!"><img src={levis} alt=""/></a></li>
        <li><a href="#!"><img src={amazon} alt=""/></a></li>
      </ul>
    </div>
  </section> 
  );
}
 
export default Brands;