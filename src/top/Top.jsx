import cs from 'classnames';
import styles from './Top.module.css';
import cardsConfig from './config'

function Top() {
  return (
    <div className={styles.top} id="locations">
      <div>
        <h2 className={cs(styles.topTitle, "sectionTitle")}> Today top places to visit</h2>
        <div className={styles.topCards}>
          {cardsConfig.map((cardInfo) => {
            return (
              <div key={cardInfo.id} className={styles.topCard}>
                <div className={styles.topCardPic}>
                  <img
                    src={cardInfo.img}
                    alt={cardInfo.name}
                  />
                  <div className={styles.topCardStats}>
                    <h3 className={styles.topCardTitle}>{cardInfo.name}</h3>
                    <div className={styles.topCardLikes}>
                      <span>{cardInfo.likesAmount}</span>
                    </div>
                    <div className={styles.topCardComments}>
                      <span>{cardInfo.commentsAmount}</span>
                    </div>
                  </div>
                </div>
                <p className={styles.topCardDesc}>
                  {cardInfo.description}
                </p>
                <a href={cardInfo.link} className={styles.topCardMore}>SEE MORE</a>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}
export default Top;