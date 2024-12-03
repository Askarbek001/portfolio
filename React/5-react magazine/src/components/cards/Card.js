import styles from "./card.module.css"
import arrowImg from "./../../images/icons/Arrow 1.svg"

const Card = (props) => {

  return ( 
    <div className={styles.card}>
    <a className={styles.card__link} href="#!"></a>
      <img className={styles.card__img} src={props.img} alt="Category..."/>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>{props.title}</div>
          <div className={styles.card__muted}>Explore Now!</div>
        </div>
        <div className={styles.card__icon}>
          <img src={arrowImg} alt="Open"/>
        </div>
      </div>
    </div>
   );
}
export default Card;