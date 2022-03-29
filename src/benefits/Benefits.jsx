import styles from './Benefits.module.css';
import cardsConfig from './config'

function Benefits() {
  return (
    <div className={styles.benefits}>
      <div className={styles.benefitsWrapper}>
        <h2 className={styles.benefitsTitle}>Benefits of Odigo</h2>
        <div className={styles.benefitsCards}>
          {cardsConfig.map((cardInfo) => {
            return (
              <div key={cardInfo.id} className={styles.benefitsCard}>
                <div className={styles.benefitsCardPic}>
                  <img
                    src={cardInfo.img}
                    alt={cardInfo.name}
                    className={styles.benefitsCardThumb}
                  />
                </div>
                <h3 className={styles.benefitsCardTitle}>{cardInfo.name}</h3>
                <p className={styles.benefitsCardDesc}>
                  {cardInfo.description}
                </p>
                <a href={cardInfo.link} className={styles.benefitsCardMore}>LEARN MORE</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Benefits;