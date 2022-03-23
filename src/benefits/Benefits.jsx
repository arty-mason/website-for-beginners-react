import styles from './Benefits.module.css';
import templeIcon from "./svg/temple-icon.svg"
import personIcon from "./svg/person-icon.svg"
import buildingIcon from "./svg/building-icon.svg"

function Benefits() {
  return (
    <div className={styles.benefits}>
      <div className={styles.benefitsWrapper}>
        <h2 className={styles.benefitsTitle}>Benefits of Odigo</h2>
        <div className={styles.benefitsCards}>
          <div className={styles.benefitsCard}>
            <div className={styles.benefitsCardPic}>
              <img
                src={templeIcon}
                alt="Welcome to Odigo!"
                className={styles.benefitsCardThumb}
              />
            </div>
            <h3 className={styles.benefitsCardTitle}>Welcome to Odigo!</h3>
            <p className={styles.benefitsCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over.
            </p>
            <a href="#!" className={styles.benefitsCardMore}>LEARN MORE</a>
          </div>
          <div className={styles.benefitsCard}>
            <div className={styles.benefitsCardPic}>
              <img
                src={personIcon}
                alt="Your Personal Japan Guide"
                className={styles.benefitsCardThumb}
              />
            </div>
            <h3 className={styles.benefitsCardTitle}>Your Personal Japan Guide</h3>
            <p className={styles.benefitsCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over.
            </p>
            <a href="#!" className={styles.benefitsCardMore}>LEARN MORE</a>
          </div>
          <div className={styles.benefitsCard}>
            <div className={styles.benefitsCardPic}>
              <img
                src={buildingIcon}
                alt="Promoting Local Businesses"
                className={styles.benefitsCardThumb}
              />
            </div>
            <h3 className={styles.benefitsCardTitle}>Promoting Local Businesses</h3>
            <p className={styles.benefitsCardDesc}>
              Jump off balcony, onto stranger's head. Chase ball of string
              hide when guests come over.
            </p>
            <a href="#!" className={styles.benefitsCardMore}>LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits