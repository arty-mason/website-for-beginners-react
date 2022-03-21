import styles from './Benefits.module.css';

function Benefits() {
  return (
    <div className={styles.benefits}>
      <div className={styles.benefitsWrapper}>
        <h2 className={styles.benefitsTitle}>Benefits of Odigo</h2>
        <div className={styles.benefitsCards}>
          <div className={styles.benefitsCard}>
            <div className={styles.benefitsCardPic}>
              <img
                src="/svg/temple-icon.svg"
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
                src="/svg/person-icon.svg"
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
                src="/svg/building-icon.svg"
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