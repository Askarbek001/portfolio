import "./arrivals.css"
import Card from "./../cards/Card"
import cartImg01 from "./../../images/Cards/01.jpg"
import cartImg02 from "./../../images/Cards/02.jpg"
import cartImg03 from "./../../images/Cards/03.jpg"

const Arrivals = () => {
  return ( 
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title__2">NEW ARRIVALS</h2>
        </div>
        <div className="arrivals__cards">
          <Card title="Hoodies & Sweetshirt" img={cartImg01}/>
          <Card title="Coats & Parkas" img={cartImg02}/>
          <Card title="Tees & T-Shirt" img={cartImg03}/>
        </div>
      </div>
    </section>
   );
}
 
export default Arrivals;