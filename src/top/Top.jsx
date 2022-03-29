import styles from './Top.module.css';
import cardsConfig from './config';
import { SectionTitle } from '../shared/section-title'
import { WrapperFull } from '../shared/wrapper-full'

function Top() {
  return (
    <div className={styles.top} id="locations">
      <WrapperFull>
        <SectionTitle className={styles.topTitle} text="Today top places to visit" />
        < div className={styles.topCards}>
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
      </WrapperFull>
    </div >
  )
}
export default Top;